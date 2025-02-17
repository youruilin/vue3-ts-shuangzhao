<script lang="ts" setup>
import { reactive, provide } from 'vue'
import { useRouter } from 'vue-router'
import TaskList from '@/components/list/TaskList.vue'
import CitySwitch from './components/CitySwitch.vue'
import TaskBanner from './components/TaskBanner.vue'
import PositionType from './components/PositionType.vue'
import TaskScreen from './components/TaskScreen.vue'
import { taskStore } from '@/stores/task'

import { taskAllList } from '@/api/task'
// import { showToast } from 'vant'

const store = taskStore()

const state = reactive({
  citySwitch: false,
  positionSwitch: false,
  positionValue: '',
  screenSwitch: false,
  serviceMode: '',
  taskCycle: '',
  taskList: [],
  pageNum: 0,
  pageSize: 10,
  finished: false,
  loading: false
})

const getTaskAllList = async () => {
  // console.log(state.positionValue, store.positionValue)
  // 在这里开始加载
  state.loading = true
  if (state.pageNum == 1) state.taskList = []
  const res = await taskAllList({
    position_name: state.positionValue,
    service_mode: state.serviceMode,
    task_cycle: state.taskCycle,
    pageNum: state.pageNum,
    pageSize: state.pageSize,
    city: store.cityValue
  })
  console.log(res.total)

  // 判断条件必须加上 .length, 否则前端会一直加载数据
  // 因为，如果不加上 .length, 则当 res.records 为 undefined 时, 会一直加载数据
  if (res.records.length) {
    state.taskList = state.taskList.concat(res.records)
    // 加载状态结束
    state.loading = false
    if (state.taskList.length >= res.total) {
      // 此时数据全部加载完成
      state.finished = true
    } else {
      state.finished = false
    }
  } else {
    // 综合用户体验，不给任何提示比较好
    // showToast(res.msg)
    state.finished = true
    state.loading = false
  }
}

const onRefresh = () => {
  console.log('onRefresh执行了')
  state.pageNum = 1
  getTaskAllList()
}

const closeCitySwitch = (name: string) => {
  if (name) {
    store.setCityValue(name)
    onRefresh()
  }
  state.citySwitch = false
}

const closePositionType = (p?: string) => {
  if (p) {
    state.positionValue = p
    // store.setPositionValue(p)
    onRefresh()
  }
  state.positionSwitch = false
}

const closeTaskScreen = obj => {
  if (obj) {
    state.serviceMode = obj.mode
    state.taskCycle = obj.cycle
    onRefresh()
  }
  state.screenSwitch = false
}

provide('popup', {
  closeCitySwitch,
  closePositionType,
  closeTaskScreen
})

// List 会监听浏览器的滚动事件并计算列表的位置 - @load="onLoad"
// 当列表底部与可视区域的距离小于 offset 时，List 会触发一次 load 事件
// offset 默认值为 300
// 经过实测, onLoad 函数在页面加载时会首先自动执行一次
const onLoad = () => {
  // 正因为 onLoad 的自动执行, 导致首次调用 getTaskAllList() 函数前, 给 pageNum 赋值为 1 , 传递给后端
  state.pageNum = state.pageNum + 1
  getTaskAllList()
  console.log('onLoad触底执行了一次')
}

const router = useRouter()
const goSearch = () => {
  router.push('/task/TaskSearch')
}
</script>

<template>
  <div class="task-page">
    <div class="task-top">
      <div class="task-top-city" @click="state.citySwitch = true">
        <i></i>
        <strong>{{ store.cityValue }}</strong>
        <span></span>
      </div>
      <input
        type="text"
        readonly
        placeholder="検索したい内容を入力してください"
        @click="goSearch"
      />
      <router-link to="/message/SystemList" class="task-icon-message"></router-link>
    </div>
    <TaskBanner></TaskBanner>
    <div class="task-title">
      <h3>最新のタスク</h3>
      <div class="task-position-pop" @click="state.positionSwitch = true">
        {{ state.positionValue || '职位类型' }}<span></span>
      </div>
      <div class="task-screen-pop" @click="state.screenSwitch = true">筛选<span></span></div>
    </div>
    <van-pull-refresh v-model="state.loading" success-text="刷新成功" @refresh="onRefresh">
      <van-list
        v-model:loading="state.loading"
        :finished="state.finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <TaskList :task-list="state.taskList"></TaskList>
        <div v-if="!state.loading && state.taskList.length == 0" class="wy-no-data">暂无数据</div>
      </van-list>
    </van-pull-refresh>

    <!-- 切换城市弹框 -->
    <van-popup
      v-model:show="state.citySwitch"
      duration="0"
      position="top"
      :style="{ width: '100%', height: '100%' }"
    >
      <CitySwitch></CitySwitch>
    </van-popup>

    <!-- 切换城市弹框 -->
    <van-popup
      v-model:show="state.positionSwitch"
      duration="0.3"
      position="right"
      :style="{ width: '100%', height: '100%' }"
    >
      <PositionType></PositionType>
    </van-popup>

    <!-- 筛选条件弹框 -->
    <van-popup
      v-model:show="state.screenSwitch"
      duration="0.3"
      position="right"
      :style="{ width: '100%', height: '100%' }"
    >
      <TaskScreen></TaskScreen>
    </van-popup>
  </div>
</template>

<style lang="scss" scoped>
.task-page {
  position: relative; /* 确保父容器有定位 */
  background: #f9f9f9;
  padding: 3rem 0.59rem;
  min-height: calc(100vh - 3rem);
  .task-top {
    position: fixed;
    top: 0; /* 确保它从父容器顶部开始 */
    left: 0.2rem; /* 或根据需要设置左边距 */
    right: 0.2rem; /* 或根据需要设置左边距 */
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background-color: #f9f9f9; /* 设置背景颜色确保不透明 */
    // width: 100%; /* 确保宽度占满父容器 */
    z-index: 10; /* 设置 z-index 确保其显示在页面上方 */
    .task-top-city {
      display: flex;
      align-items: center;
      i {
        width: 1.04rem;
        height: 1.04rem;
        background: url('@/assets/img/icon/icon-place.png') no-repeat;
        background-size: 100%;
      }
      strong {
        font-size: 0.8rem;
        font-weight: 500;
        color: #333333;
        margin-left: 0.1rem;
      }
      span {
        margin: 0 0.6rem 0 0.2rem;
        display: inline-block;
        border-left: 0.18rem solid transparent;
        border-right: 0.18rem solid transparent;
        border-top: 0.36rem solid #333333;
      }
    }
    input {
      flex: 1;
      height: 1.71rem;
      background: #ffffff url('@/assets/img/icon/icon-search.png') 0.35rem 0.3rem no-repeat;
      background-size: 9%;
      border: 0.03px solid #ededed;
      border-radius: 0.85rem;
      font-size: 0.69rem;
      font-weight: 300;
      color: #999999;
      padding-left: 1.7rem;
    }
    .task-icon-message {
      width: 1.31rem;
      height: 1.28rem;
      background: url('@/assets/img/icon/icon-remind.png') no-repeat;
      background-size: 100%;
      margin-left: 0.27rem;
    }
  }
  .task-title {
    display: flex;
    align-items: center;
    margin-bottom: 0.67rem;
    margin-top: 1.44rem;
    h3 {
      flex: 1;
      font-size: 0.96rem;
      line-height: 0.96rem;
      font-weight: bold;
      color: #333333;
    }
    .task-position-pop,
    .task-screen-pop {
      font-size: 0.75rem;
      line-height: 0.75rem;
      font-weight: 300;
      color: #666666;
      margin-left: 0.56rem;
      span {
        display: inline-block;
        border-left: 0.18rem solid transparent;
        border-right: 0.18rem solid transparent;
        border-top: 0.36rem solid #333333;
        margin-left: 0.25rem;
      }
    }
  }
}
</style>

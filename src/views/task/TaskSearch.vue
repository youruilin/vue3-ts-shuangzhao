<script setup lang="ts">
import { reactive } from 'vue'
import TaskList from '@/components/list/TaskList.vue'
import { showToast } from 'vant'

import { hotSearch, taskAllList } from '@/api/task'
import { taskStore } from '@/stores/task'
const store = taskStore()

const localSearchHistory = localStorage.getItem('searchHis')

const state = reactive({
  value: '',
  searchFlag: false,
  loading: false,
  finished: false,
  taskList: [],
  pageNum: 1,
  pageSize: 10,
  searchHistory: localSearchHistory ? JSON.parse(localSearchHistory) : []
})
const leftBack = () => history.back()

const onSearch = value => {
  if (!value) return
  state.searchFlag = true
  if (!state.searchHistory.includes(value)) {
    state.searchHistory.push(value)
    // 将搜索历史保存到 localStorage，使用 JSON.stringify() 将数组转为字符串
    localStorage.setItem('searchHis', JSON.stringify(state.searchHistory))
  }
  console.log('是否执行了搜索逻辑')
  getTaskAllList()
}

const gotoSearch = item => {
  state.value = item
  onSearch(item)
}

const clearHistory = () => {
  state.searchHistory = []
  localStorage.removeItem('searchHis')
}

const getHotSearch = async () => {
  const res = await hotSearch({
    type: 1
  })
  if (res.data) {
    store.setHotSearchList(res.data)
  } else {
    showToast(res.msg)
  }
}
if (store.hotSearchList.length <= 0) getHotSearch()

const getTaskAllList = async () => {
  state.loading = true
  if (state.pageNum == 1) state.taskList = []
  const res = await taskAllList({
    position_name: state.value,
    pageNum: state.pageNum,
    pageSize: state.pageSize
  })
  if (res.records) {
    state.taskList = state.taskList.concat(res.records)
    state.loading = false
    if (state.taskList.length >= res.total) {
      state.finished = true
    } else {
      state.finished = false
    }
  } else {
    showToast(res.msg)
    state.loading = false
  }
}

const onCancel = () => {
  state.searchFlag = false
  state.value = ''
}
const onLoad = () => {
  state.pageNum += 1
  getTaskAllList()
}
const onRefresh = () => {
  state.pageNum = 1
  // getTaskAllList()
}
</script>

<template>
  <div :class="state.searchFlag ? 'search-page' : ''">
    <van-nav-bar title="搜索" left-arrow @click-left="leftBack" />
    <div class="search-cont">
      <van-search
        v-model="state.value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
      />
      <div v-if="!state.searchFlag" class="search-item">
        <h3>搜索历史<van-icon name="delete-o" @click="clearHistory" /></h3>
        <dl>
          <dt
            v-for="(item, index) in state.searchHistory.slice(-10).reverse()"
            :key="index"
            @click="gotoSearch(item)"
          >
            {{ item }}
          </dt>
        </dl>
        <h3>热门搜索<van-icon name="hot-o" /></h3>
        <dl>
          <dt
            v-for="(item, index) in store.hotSearchList"
            :key="index"
            @click="gotoSearch(item.title)"
          >
            {{ item.title }}
          </dt>
        </dl>
      </div>
      <div v-if="state.searchFlag" class="search-list">
        <van-pull-refresh v-model="state.loading" success-text="刷新成功" @refresh="onRefresh">
          <!-- 父组件 v-model 的作用: 控制下拉的刷新状态, 当达到触发条件后, 组件自动将 v-model 的值设置为 true ,实测并不会触发 @refresh 方法, 该方法仅在下拉时触发,因此推断 v-model 仅用来控制下拉效果, 在该方法的最后, 需要手动设置 v-model 的值为 false 通知组件刷新结束并复位 -->
          <van-list
            v-model:loading="state.loading"
            :finished="state.finished"
            finished-text="没有更多了"
            @load="onLoad"
          >
            <TaskList :task-list="state.taskList"></TaskList>
            <div v-if="!state.loading && state.taskList.length == 0" class="wy-no-data">
              暂无数据
            </div>
          </van-list>
        </van-pull-refresh>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.search-page {
  background: #f9f9f9;
  height: 100%;
  min-height: 100vh;
  .van-nav-bar {
    background: none;
  }
}

:deep(.van-search__content) {
  background: #f2f2f2;
  border-radius: 0.85rem;
}

:deep(.van-search--show-action) {
  padding-left: 0px;
  background: none;
}

:deep(.van-search__action) {
  font-size: 0.85rem;
  font-weight: 400;
  color: #666666;
  padding-right: 0px;
}

/* 使用 :deep 选择全局的 .body 类 */
:deep(.body) {
  background: #f9f9f9;
}

.search-cont {
  padding: 0 0.64rem;
  h3 {
    font-size: 0.8rem;
    line-height: 0.8rem;
    font-weight: 500;
    color: #000000;
    margin: 0.85rem 0 0.85rem;
    display: flex;
  }
  i {
    flex: 1;
    text-align: right;
    font-size: 0.9rem;
  }
  dl dt {
    background: #f5f5f5;
    border-radius: 0.16rem;
    padding: 0.45rem;
    font-size: 0.64rem;
    line-height: 0.64rem;
    font-weight: 400;
    color: #333333;
    margin-right: 0.51rem;
    margin-bottom: 0.53rem;
    display: inline-block;
  }
}
</style>

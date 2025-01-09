<script setup lang="ts">
import { inject, reactive } from 'vue'
import { screenList } from '@/api/task'
import { taskStore } from '@/stores/task'

interface PopupContext {
  closeTaskScreen: (obj?) => void
}

// 注入并进行类型断言
const popupContext = inject('popup') as PopupContext | null

// 检查 popupContext 是否存在
if (!popupContext) {
  throw new Error('popup is not provided')
}

const { closeTaskScreen } = popupContext // 解构出 closeCitySwitch

const store = taskStore()

const state = reactive({
  mode: '',
  cycle: ''
})

const leftBack = () => closeTaskScreen()

const modeChange = name => {
  state.mode = name
}
const cycleChange = name => {
  state.cycle = name
}

const clearScreen = () => {
  state.mode = ''
  state.cycle = ''
}

const getScreenList = async () => {
  const res = await screenList()
  if (res.data) {
    // console.log(res)
    store.setScreenList(res.data)
    // showToast(res.msg)
  } else {
    // showToast(res.msg)
  }
}
if (!store.screenList.serviceMode) getScreenList()
</script>

<template>
  <van-nav-bar title="フィルター" left-arrow @click-left="leftBack">
    <template #left>
      <van-icon name="cross" size="17" />
    </template>
  </van-nav-bar>
  <div class="task-screen">
    <h3>サービス</h3>
    <div class="screen-item">
      <span
        v-for="(item, index) in store.screenList.serviceMode"
        :key="index"
        :class="state.mode == item ? 'active' : ''"
        @click="modeChange(item)"
        >{{ item }}</span
      >
    </div>
    <h3>任务間</h3>
    <div class="screen-item">
      <span
        v-for="(item, index) in store.screenList.taskCycle"
        :key="index"
        :class="state.cycle == item ? 'active' : ''"
        @click="cycleChange(item)"
        >{{ item }}</span
      >
    </div>
  </div>
  <div class="screen-footer">
    <button class="screen-clear" @click="clearScreen">清除</button>
    <van-button type="primary" block @click="closeTaskScreen(state)">确定</van-button>
  </div>
</template>
<style lang="scss" scoped>
.task-screen {
  padding: 0 0.6rem;
  h3 {
    font-size: 0.96rem;
    line-height: 0.96rem;
    font-weight: 500;
    color: #333333;
    margin: 0.8rem 0;
  }
  span {
    width: 5.76rem;
    height: 1.6rem;
    line-height: 1.6rem;
    background: #f5f6f8;
    border: 1px solid #f5f6f8;
    border-radius: 0.16rem;
    font-size: 0.75rem;
    font-weight: 400;
    color: #666666;
    text-align: center;
    display: inline-block;
    margin: 0 0.59rem 0.51rem 0;
    &:nth-child(3n) {
      margin-right: 0;
    }
    &.active {
      color: #ff8a00;
      border: 1px solid #fe8f27;
      background: #ffffff;
    }
  }
}
.screen-footer {
  position: fixed;
  bottom: 0;
  background: #ffffff;
  box-shadow: 0rem 0rem 1rem 0rem rgba(208, 208, 208, 0.39);
  padding: 0.83rem 0.64rem;
  display: flex;
  width: calc(100vw - 1.28rem);
  .screen-clear {
    width: 5.33rem;
    height: 2.35rem;
    background: #f5f6f8;
    border-radius: 0.27rem;
    border: 0;
    font-size: 0.8rem;
    font-weight: bold;
    color: #666565;
    margin-right: 0.64rem;
  }
}
</style>

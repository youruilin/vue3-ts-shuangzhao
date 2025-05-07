<script setup>
import AccountInfo from '../components/AccountInfo.vue'
import AccountList from '../components/AccountList.vue'

import { transferList, incomeList } from '@/api/my'
import { reactive } from 'vue'
const state = reactive({
  check: 0,
  loading: false,
  list: []
})
const leftBack = () => history.back()

const tabs = [
  {
    type: 0,
    text: '全部'
  },
  {
    type: 1,
    text: '收入'
  },
  {
    type: 2,
    text: '提现'
  }
]

const toCheck = async index => {
  state.check = index
  // console.log('点击tab')
  state.list = []
  if (index == 0) {
    await getTransferList()
    await getIncomeList()
    state.list = state.list.flat(2)
  }
  if (index == 1) {
    await getIncomeList()
    state.list = state.list.flat(2)
  }
  if (index == 2) {
    await getTransferList()
    state.list = state.list.flat(2)
  }
}

const getTransferList = async () => {
  state.loading = true
  const res = await transferList()
  if (res) {
    state.list.push(res)
    state.loading = false
  }
}
const getIncomeList = async () => {
  state.loading = true
  const res = await incomeList()
  if (res) {
    state.list.push(res)
    state.loading = false
  }
}
toCheck(0)
</script>

<template>
  <van-nav-bar title="我的账户" left-arrow @click-left="leftBack" />

  <!-- 账户信息组件 -->
  <AccountInfo></AccountInfo>

  <!-- tab 切换栏 -->
  <dl>
    <dt
      v-for="(value, index) in tabs"
      :key="index"
      :class="state.check === index ? 'active' : ''"
      @click="toCheck(index)"
    >
      {{ value.text }}
    </dt>
  </dl>

  <!-- 账户流水记录 -->
  <AccountList :list="state.list"></AccountList>
</template>

<style lang="scss" scoped>
:deep(.van-nav-bar__content) {
  background: #ff8e00;
}
:deep(.van-nav-bar__title) {
  color: #fff;
}
:deep(.van-icon-arrow-left:before) {
  color: #fff;
}

/* 全局样式（非scoped） */
.van-hairline--bottom:after {
  // border-bottom-width: 0 !important;
  display: none !important; /* 可选：彻底移除伪元素 */
}

dl {
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-around;
  dt {
    padding: 1.47rem 0 0.59rem;
    font-size: 0.75rem;
    line-height: 0.75rem;
    font-weight: 500;
    color: #666;
    &.active {
      color: #ff8e00;
      border-bottom: 1px solid #ff8e00;
    }
  }
}
</style>

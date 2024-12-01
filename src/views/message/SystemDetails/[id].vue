<script setup lang="ts">
import { reactive } from 'vue'
import { systemDetails } from '@/api/message'
import { showToast } from 'vant'

import { useRoute } from 'vue-router'
const route = useRoute()
// 从当前路由中获取动态参数
// const id = router.currentRoute.value.params.id
const id = route.params.id

const state = reactive({
  item: { title: '', content: '' }, // 默认空对象
  loading: false
})
const leftBack = () => history.back()
const getSystemDetails = async () => {
  state.loading = true
  const res = await systemDetails({
    id: id
  })
  if (res) {
    state.item = res[0] // 这是因为响应拦截器，return res.result || res.data
  } else {
    showToast('出错了')
  }
  state.loading = false
}
getSystemDetails()
</script>
<template>
  <van-nav-bar title="查看消息" left-arrow @click-left="leftBack" />
  <h3>{{ state.item.title }}</h3>
  <p>{{ state.item.content }}</p>
</template>
<style scoped>
h3 {
  font-size: 0.8rem;
  line-height: 0.8rem;
  font-weight: 400;
  color: #333333;
  margin: 1.7rem 0.75rem 0.83rem;
}
p {
  font-size: 0.69rem;
  font-weight: 500;
  color: #666666;
  line-height: 1.23rem;
  text-indent: 2em;
}
</style>

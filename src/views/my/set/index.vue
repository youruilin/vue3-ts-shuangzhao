<script setup lang="ts">
import { userStore } from '@/stores/user'
import setItem from '../components/setItem.vue'
import router from '@/router'

const leftBack = () => history.back()

const store = userStore()
const logout = () => {
  store.logout()
  router.push('/login')
}
</script>
<template>
  <div class="set-page">
    <van-nav-bar title="我的设置" left-arrow @click-left="leftBack" />
    <setItem></setItem>
    <div class="set-btn" @click="logout">退出登录</div>
  </div>
</template>
<style scoped>
.set-page {
  height: 100vh;
  background: #f9f9f9;
}
.set-btn {
  height: 2.35rem;
  line-height: 2.35rem;
  background: linear-gradient(90deg, #ffa400, #ff8900);
  border-radius: 0.27rem;
  font-size: 0.8rem;
  color: #fff;
  border: 0;
  text-align: center;
  width: calc(100vw-1.28rem);
  margin: 0 0.64rem;
}
</style>

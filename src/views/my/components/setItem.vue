<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const gotoPage = (path: string) => {
  router.push(path)
}
</script>

<template>
  <div class="my-common">
    <!-- 跳转的路由地址，必须以/开头，否则默认从当前路由地址开始寻找 -->
    <div class="my-item" @click="gotoPage('/login/PrivatePolicy')">
      <van-icon name="records-o" />
      <label>隐私政策</label>
      <span><van-icon name="arrow" /></span>
    </div>
    <div class="my-item" @click="gotoPage('/login/ServiceAgree')">
      <van-icon name="notes-o" />
      <label>服务协议</label>
      <span><van-icon name="arrow" /></span>
    </div>
  </div>
</template>

<style scoped>
.my-common {
  background: #ffffff;
  border-radius: 0.27rem;
  margin: 0.8rem 0.64rem 1rem;
  .my-item {
    height: 2.67rem;
    background: #ffffff;
    border-bottom: 1px solid #eeeeee;
    display: flex;
    align-items: center;
    padding: 0 0.4rem 0 0rem;
    margin-left: 0.69rem;
    font-size: 0.69rem;
    color: #464646;
    &.my-item:last-child {
      border-bottom: 0;
    }
    img {
      width: 1.12rem;
      height: 1.12rem;
      margin-right: 0.85rem;
    }
    label {
      flex: 1;
    }
    span {
      display: flex;
      align-items: center;
      text-align: right;
      img {
        width: 1.28rem;
        height: 1.28rem;
        border-radius: 50%;
        margin-right: 0.32rem;
      }
    }
  }
}
</style>

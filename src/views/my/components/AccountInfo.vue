<script setup lang="ts">
import { useRouter } from 'vue-router'
import { myStore } from '@/stores/my'

const store = myStore()
const router = useRouter()

const gotoPath = path => {
  router.push(path)
}

if (!store.userInfo.user_name) {
  store.getUserInfo()
}

console.log('accountInfo setup start')
</script>

<template>
  <div class="account-info">
    <p>
      <label
        >账户余额 <van-icon name="question-o" @click="gotoPath('/my/account/CoinExplain')"
      /></label>
      <span @click="gotoPath('/my/account/AcountAdvance')">提现<van-icon name="arrow" /></span>
    </p>
    <!-- 这里，逻辑上的瑕疵居然会导致该组件重复渲染，真是晕了 -->
    <h3>{{ store.userInfo.account_price?.toFixed(2) ?? '0.00' }}</h3>
  </div>
</template>

<style scoped>
.account-info {
  background: #ff8e00;
  width: 100%;
  p {
    padding: 1rem 0.67rem 3.57rem;
    font-size: 0.8rem;
    line-height: 0.8rem;
    font-weight: 400;
    color: #ffffff;
    display: flex;
    justify-content: space-between;
  }
  h3 {
    font-size: 1.6rem;
    line-height: 1.6rem;
    font-family: PingFang SC;
    font-weight: 400;
    color: #ffffff;
    padding-bottom: 3.49rem;
    text-align: center;
  }
}
</style>

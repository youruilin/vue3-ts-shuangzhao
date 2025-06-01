<script setup>
import { withdraw } from '@/api/my'
import { showToast } from 'vant'
import { reactive, watch } from 'vue'

import { myStore } from '@/stores/my'

const store = myStore()

const state = reactive({
  price: null,
  loading: false
})

const submitAdvance = async () => {
  if (state.price < 0.1) {
    showToast('提现金额不能小于0.1元')
    return
  }
  const res = await withdraw({ price: state.price })
  if (res.code) {
    store.getUserInfo()
  }
  showToast(res.msg)
}
const leftBack = () => history.back()

const allAdvance = () => {
  state.price = store.userInfo.account_price
}
watch(
  () => state.price,
  (newValue, oldValue) => {
    if (parseFloat(newValue) < 0) {
      showToast('需大于0')
      return
    }
    if (parseFloat(newValue) > 50000) {
      showToast('单笔提现金额不能超过5万元')
      return
    }
    if (newValue) {
      newValue = newValue.toString()
      let index = newValue.indexOf('.')
      if (index > 0 && newValue.length - index > 3) {
        state.price = parseFloat(oldValue)
      }
    }
  }
)
</script>

<template>
  <van-nav-bar title="提现" left-arrow @click-left="leftBack" />
  <div class="advance">
    <van-form>
      <div class="advance-amount">
        <h5>提现金额</h5>
        <div>
          <span>￥</span>
          <input v-model="state.price" step="0.01" type="number" />
        </div>
        <p>
          <span>可提现的余额￥{{ store.userInfo.account_price?.toFixed(2) ?? '0.00' }}</span>
          <label @click="allAdvance">全部提现</label>
        </p>
      </div>
      <button class="advance-btn" native-type="submit" @click="submitAdvance">提现至支付宝</button>
    </van-form>
  </div>
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

.advance {
  padding: 1.17rem 0.64rem 0;
  background: #f3f3f3;
  height: calc(100vh - 46px - 1.17rem);
  .advance-amount {
    background: #fff;
    border-radius: 0.27rem;
    padding: 1.31rem 0.72rem 0.93rem;
    h5 {
      font-size: 0.75rem;
      line-height: 0.75rem;
      font-weight: 400;
      color: #999;
      margin-bottom: 2.43rem;
    }
    div {
      font-size: 1.28rem;
      line-height: 1.28rem;
      font-weight: 400;
      color: #333;
      padding-bottom: 1.6rem;
      border-bottom: 1px soild #eee;
    }
    p {
      padding: 0.93rem 0;
      display: flex;
      justify-content: space-between;
      lable {
        color: #ff8e00;
      }
      span {
        color: #999;
      }
    }
  }
  .advance-btn {
    height: 2.35rem;
    line-height: 2.35rem;
    background: linear-gradient(90deg, #ff8e00 0%, #ff8e00 100%);
    border-radius: 0.27rem;
    font-size: 0.8rem;
    color: #fff;
    border: 0;
    text-align: center;
    width: calc(100vw - 1.44rem);
    margin-top: 1.33rem;
  }
}
</style>

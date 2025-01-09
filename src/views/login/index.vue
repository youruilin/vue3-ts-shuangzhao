<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { showToast } from 'vant'
import { userStore } from '@/stores/user'
import { getCode, login } from '@/api/user'

const store = userStore()

const router = useRouter()

const state = reactive({
  checked: true,
  accounts: '',
  code: '',
  codeText: '確認コードを取得する',
  time: 60,
  interTimerCode: null as number | null
})

const getCodeChange = async () => {
  if (state.interTimerCode) return
  const res = await getCode({
    accounts: state.accounts
  })
  if (res) {
    // 倒计时开始
    state.interTimerCode = setInterval(() => {
      state.time--
      if (state.time <= 0) {
        clearInterval(state.interTimerCode!)
        state.time = 60
        state.codeText = '確認コードを取得する'
      } else {
        state.codeText = '再送信(' + state.time + 's)'
      }
    }, 1000) as unknown as number
    // 返回固定验证码
    console.log(res)
    state.code = res.code
  }
}
const loginSubmit = async () => {
  if (!state.code) {
    showToast('请输入验证码')
    return
  }
  if (!state.checked) {
    showToast('请先阅读并同意《IT企业平台服务协议》和《隐私政策》')
    return
  }
  const res = await login({
    accounts: state.accounts,
    code: state.code
  })
  if (res.errCode === 200) {
    // 登录成功 - 需要将返回的数据存起来 - 存到本地
    showToast('登录成功')
    console.log(res)

    store.setUserInfo(res.data)

    // 进入人才端
    if (store.role == '1') {
      router.push('/task')
    }
    // 进入管理端
    if (store.role == '2') {
      router.push('/talent')
    }
  } else {
    showToast('验证失败')
  }
}

const handleFocus = () => {
  state.accounts = '13321178501'
}

const onClickLeft = () => history.back()
</script>

<template>
  <div class="login-main">
    <van-icon class="icon-left" name="arrow-left" @click="onClickLeft" />
    <div class="login-form">
      <h3>認証コードによるログイン</h3>
      <div class="login-form-item">
        <div class="icon-phone"></div>
        <input
          v-model="state.accounts"
          placeholder="携帯電話番号を入力してください"
          type="text"
          @focus="handleFocus"
        />
      </div>
      <div class="login-form-item">
        <div class="icon-code"></div>
        <input v-model="state.code" placeholder="確認コードしてください" type="text" />
        <span @click="getCodeChange">{{ state.codeText }}</span>
      </div>
      <van-button type="primary" block @click="loginSubmit">登录</van-button>
      <div class="login-form-label">
        <van-checkbox v-model="state.checked">我已阅读</van-checkbox>
        <router-link to="/login/ServiceAgree">《IT企业平台服务协议》</router-link>和
        <router-link to="/login/PrivatePolicy">《隐私政策》</router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-main {
  background: #fff;
  height: 100vh;
}
.icon-left {
  font-size: 0.8rem;
  margin: 0.67rem 0 0 0.67rem;
}
.login-form {
  padding: 0 1.07rem;
  h3 {
    font-size: 1.39rem;
    line-height: 1.39rem;
    font-weight: 400;
    color: #333333;
    margin-top: 2.35rem;
    margin-bottom: 4rem;
    padding-left: 0.3rem;
  }
  .login-form-item {
    display: flex;
    font-size: 0.85rem;
    font-weight: 300;
    color: #9fa7ad;
    margin: 0 0.18rem 2rem;
    padding: 0.5rem 0;
    border-bottom: 1px solid #e7e7e7;
    align-items: center;
    .icon-phone {
      background: url('@/assets/img/icon/icon-phone.png') no-repeat;
      background-size: 100%;
      width: 1.01rem;
      height: 1.01rem;
    }
    .icon-code {
      background: url('@/assets/img/icon/icon-code.png') no-repeat;
      background-size: 100%;
      width: 1.01rem;
      height: 1.01rem;
    }
    input {
      flex: 1;
      margin-left: 0.48rem;
    }
    span {
      font-size: 0.75rem;
      font-weight: 300;
      color: #fe9527;
      border-left: 1px solid #fe9527;
      line-height: 0.75rem;
      padding-left: 0.56rem;
    }
  }
  .login-form-label {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 1.5rem;
    left: 0;
    width: 100%;
  }
}
</style>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { myStore } from '@/stores/my'

const store = myStore()
if (!store.userInfo.user_name) store.getUserInfo()

const router = useRouter()

const gotoPage = path => {
  router.push(path)
}
</script>

<template>
  <div class="my-page">
    <van-nav-bar title="我的">
      <template #right>
        <van-icon name="setting-o" @click="gotoPage('/my/set')" />
      </template>
    </van-nav-bar>
    <div class="my-info" @click="gotoPage('/my/user')">
      <img v-if="store.userInfo.it_head" :src="store.userInfo.it_head" alt="" />
      <img v-else src="@/assets/img/icon/icon-message.png" alt="" />
      <div>
        <h3>{{ store.userInfo.user_name }}<span></span></h3>
        <p>IT企业人才</p>
        <i @click="gotoPage('/my/account')"></i>
      </div>
    </div>
    <div class="my-type">
      <router-link to="/my/collect">
        <img src="@/assets/img/my/icon-my-collection.png" alt="" />
        <span>我的收藏</span>
      </router-link>
      <strong></strong>
      <router-link to="/my/resume">
        <img src="@/assets/img/my/icon-my-resume.png" alt="" />
        <span>我的简历</span>
      </router-link>
    </div>
    <div class="my-contract">
      <div class="my-title">
        <h3>我的合约</h3>
        <span>查看全部合约</span>
      </div>
      <div class="my-contract-cur">
        <span><img src="@/assets/img/my/contract-be-signed.png" alt="" />待签约</span>
        <span><img src="@/assets/img/my/contract-in-performance.png" alt="" />履约中</span>
        <span><img src="@/assets/img/my/contract-completed.png" alt="" />已完成</span>
        <span><img src="@/assets/img/my/contract-canceled.png" alt="" />已取消</span>
      </div>
    </div>
    <div class="my-common">
      <div class="my-title">
        <h3>常用功能</h3>
      </div>
      <div class="my-item">
        <img src="@/assets/img/my/icon-real-name-auth.png" alt="" />
        <label>实名认证</label>
        <span><van-icon name="arrow" /></span>
      </div>
      <div class="my-item">
        <img src="@/assets/img/my/icon-account-manager.png" alt="" />
        <label>专属客户经理</label>
        <span>
          <img src="@/assets/img/icon/icon-message.png" alt="" />无忧经理<van-icon name="arrow" />
        </span>
      </div>
    </div>
    <div class="my-common">
      <div class="my-item">
        <img src="@/assets/img/my/icon-feedback.png" alt="" />
        <label>意见反馈</label>
        <span><van-icon name="arrow" /></span>
      </div>
      <div class="my-item">
        <img src="@/assets/img/my/icon-about.png" alt="" />
        <label>关于我们</label>
        <span><van-icon name="arrow" /></span>
      </div>
    </div>
    <div class="my-common">
      <div class="my-item">
        <img src="@/assets/img/my/icon-switch-role.png" alt="" />
        <label>切换身份</label>
        <span>当前为IT企业人才<van-icon name="arrow" /></span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
:deep(.van-nav-bar) {
  background: none;
}

:deep(.van-nav-bar__title) {
  color: #ffffff;
  font-size: 0.96rem;
}

:deep(.van-nav-bar .van-icon) {
  font-size: 1.12rem;
  color: #ffffff !important;
}

:deep(.van-hairline--bottom:after) {
  border-bottom: 0 !important;
}

:deep(.van-nav-bar__right) {
  padding-right: 0;
}

.my-page {
  padding: 0 0.77rem 3rem;
  background: #fbfbfb url(@/assets/img/my/top-background.png) center -0.8rem no-repeat;
  background-size: contain;
  height: calc(100vh - 3rem);
  overflow: auto;
  .my-info {
    display: flex;
    align-items: center;
    margin: 0.8rem 0 0.93rem;
    position: relative;
    right: -0.77rem;
    img {
      width: 3.2rem;
      height: 3.2rem;
      border-radius: 50%;
      margin-right: 0.85rem;
    }
    div h3 {
      font-size: 0.96rem;
      line-height: 0.96rem;
      font-weight: 400;
      color: #ffffff;
      margin-bottom: 0.48rem;
      span {
        width: 0.56rem;
        height: 0.56rem;
        margin-left: 0.59rem;
        display: inline-block;
        background: url(@/assets/img/my/icon-edit.png) no-repeat;
        background-size: 100%;
      }
    }
    p {
      font-size: 0.69rem;
      line-height: 0.69rem;
      font-weight: 400;
      color: #ffffff;
    }
    i {
      width: 4.91rem;
      height: 1.39rem;
      background: url(@/assets/img/my/icon-my-account.png) no-repeat;
      background-size: 100%;
      position: absolute;
      right: 0;
    }
  }
  .my-type {
    display: flex;
    align-items: center;
    height: 3.31rem;
    background: #ffffff;
    box-shadow: 0rem 0rem 1rem 0rem rgba(49, 57, 73, 0.09);
    border-radius: 0.27rem;
    margin-bottom: 0.53rem;
    strong {
      width: 0.03rem;
      height: 1.95rem;
      background: #ededed;
      margin-left: 1.92rem;
    }
    a {
      display: flex;
      align-items: center;
      margin-left: 1.92rem;
      img {
        width: 2.24rem;
        height: 2.24rem;
        margin-right: 0.51rem;
      }
      span {
        font-size: 0.69rem;
        line-height: 0.69rem;
        font-weight: 400;
        color: #666666;
      }
    }
  }
  .my-contract {
    height: 7.9rem;
    background: #ffffff;
    border-radius: 0.27rem;
    margin-bottom: 0.59rem;

    h3 {
      font-size: 0.8rem;
      line-height: 0.8rem;
      font-weight: 400;
      color: #333333;
      flex: 1;
    }
    span {
      text-align: right;
      font-size: 0.64rem;
      color: #464646;
    }
  }
  .my-title {
    height: 2.69rem;
    border-bottom: 1px solid #eeeeee;
    display: flex;
    align-items: center;
    padding: 0 0.8rem;
  }
  .my-contract-cur {
    height: 5.17rem;
    display: flex;
    align-items: center;
    vertical-align: center;
    span {
      flex: 1;
      text-align: center;
      font-size: 0.69rem;
      color: #464646;
      img {
        width: 1.39rem;
        height: 1.39rem;
        display: block;
        margin: 0 auto 0.59rem;
      }
    }
  }
}
.my-common {
  background: #ffffff;
  border-radius: 0.27rem;
  margin-bottom: 0.59rem;
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

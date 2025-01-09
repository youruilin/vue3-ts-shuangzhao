<script setup lang="ts">
import { reactive } from 'vue'

import { taskStore } from '@/stores/task'
const tsStore = taskStore()
if (!tsStore.areaList.length) {
  console.log('测试进程')

  tsStore.getCityList()
  console.log(tsStore.areaList, 'if')
}

const state = reactive({
  userName: '',
  showSex: false,
  sex: '',
  Birth: '',
  birthDay: '',
  showBirth: false,
  workDay: '',
  showWorkDay: false,
  minDate: new Date(1980, 1, 1),
  maxDate: new Date(2024, 1, 1),
  showCity: false,
  city: '',
  area: ''
})

const birthdayConfirm = value => {
  state.birthDay = value.getFullYear() + '-' + (value.getMonth() + 1)
  state.showBirth = false
}
const workdayConfirm = value => {
  state.birthDay = value.getFullYear() + '-' + (value.getMonth() + 1)
  state.showWorkDay = false
}

const sexList = [{ name: '男' }, { name: '女' }]
const afterRead = async () => {}

const onSubmit = () => {}
const clickLeft = () => {}

const cityConfirm = value => {
  state.city = value[0].text
  state.area = value[1].text
  state.showCity = false
}
</script>

<template>
  <van-nav-bar title="个人信息" left-arrow @click-left="clickLeft" />

  <div class="user-page">
    <van-form @submit="onSubmit">
      <div class="user-pic">
        <van-uploader accept=".jpg,.png" :after-read="afterRead" :max-count="1" />
      </div>
      <div class="user-item">
        <h5>姓名</h5>
        <van-field v-model="state.userName" label="" placeholder="请输入您的姓名" />
      </div>
      <div class="user-item">
        <h5>性别</h5>
        <van-field
          v-model="state.sex"
          readonly
          is-link
          label=""
          placeholder="请选择您的性别"
          @click="state.showSex = true"
        />
        <van-action-sheet
          v-model:show="state.showSex"
          :actions="sexList"
          cancel-text="取消"
          close-on-click-action
        />
      </div>
      <div class="user-item">
        <h5>出生日期</h5>
        <van-field
          v-model="state.birthDay"
          readonly
          is-link
          label=""
          placeholder="请选择您的出生年月日"
          @click="state.showBirth = true"
        />
        <van-action-sheet v-model:show="state.showBirth">
          <van-date-picker
            title="选择日期"
            :min-date="state.minDate"
            :max-date="state.maxDate"
            @confirm="birthdayConfirm"
          />
        </van-action-sheet>
      </div>
      <div class="user-item">
        <h5>参加工作的时间</h5>
        <van-field
          v-model="state.workDay"
          label=""
          readonly
          is-link
          placeholder="请选择您的工作时间"
          @click="state.showWorkDay = true"
        />
        <van-action-sheet v-model:show="state.showWorkDay" title="标题">
          <van-date-picker
            title="选择日期"
            :min-date="state.minDate"
            :max-date="state.maxDate"
            @confirm="workdayConfirm"
          />
        </van-action-sheet>
      </div>
      <div class="user-item">
        <h5>所在城市</h5>
        <van-field
          v-model="state.city"
          label=""
          placeholder="请选择您的城市"
          readonly
          is-link
          @click="state.showCity = true"
        />
        <van-action-sheet v-model:show="state.showCity">
          <van-picker
            :columns="tsStore.areaList"
            @confirm="cityConfirm"
            @cancel="state.showCity = false"
          />
        </van-action-sheet>
      </div>
      <button class="wy-confirm-btn">提交修改</button>
    </van-form>
  </div>
</template>

<style lang="scss" scoped>
:deep(.van-uploader__upload) {
  margin: 0;
}
:deep(.van-uploader__upload) {
  border-radius: 50%;
}
.user-page {
  margin: 0 0.6rem;
  .user-pic {
    text-align: center;
    padding: 0.67rem;
    margin-bottom: 1.47rem;
    border-bottom: 1px solid #f3f3f3;
    .user-pic img {
      width: 3.7rem;
      height: 3.7rem;
      border-radius: 50%;
    }
  }
  .user-item {
    margin-bottom: 1.47rem;
    border-bottom: 1px solid #f3f3f3;
    h5 {
      font-size: 0.75rem;
      line-height: 0.75rem;
      font-weight: 600;
      color: #666;
    }
  }
  .wy-confirm-btn {
    height: 2.35rem;
    line-height: 2.35rem;
    background: linear-gradient(90deg, #fea829, #fe8f27);
    border-radius: 0.27rem;
    width: calc(100vw - 1.2rem);
    border: 0;
    position: fixed;
    left: 0;
    bottom: 0;
    margin: 0 0.6rem 0.6rem;
    font-size: 0.8rem;
  }
}
</style>

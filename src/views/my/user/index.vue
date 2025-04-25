<script setup lang="ts">
import { reactive } from 'vue'
import { taskStore } from '@/stores/task'
import { showToast, type DatePickerColumnType } from 'vant'

import { common } from '@/utils/common'

import { uploadImg, userModify } from '@/api/my'

const tsStore = taskStore()
if (!tsStore.areaList.length) {
  console.log('测试进程')

  tsStore.getCityList()
  console.log(tsStore.areaList, 'if')
}

import { myStore } from '@/stores/my'

const Mstore = myStore()

const state = reactive({
  fileList: [] as { url: string }[],
  userName: '',
  showSex: false,
  sex: '',
  birthDay: '',
  showBirth: false,
  workDay: '',
  showWorkDay: false,
  minDate: new Date(1980, 0, 1),
  maxDate: new Date(2007, 0, 1),
  showCity: false,
  city: '',
  area: '',
  loading: false,
  columnsType: ['year', 'month'] as DatePickerColumnType[]
})

const birthdayConfirm = values => {
  state.birthDay = values.selectedValues[0] + '-' + values.selectedValues[1]
  state.showBirth = false
}
const workdayConfirm = values => {
  state.workDay = values.selectedValues[0] + '-' + values.selectedValues[1]
  state.showWorkDay = false
}

const sexList = [{ name: '男' }, { name: '女' }]
const afterRead = async file => {
  file.status = 'uploading'
  file.message = '上传中...'
  let param = new FormData()
  param.append('user', 'test')
  param.append('file', file.file)
  const res: { imageUrl: string } = await uploadImg(param)
  file.url = res.imageUrl
  file.status = 'success'
  file.message = '上传成功'
  state.fileList = [file]
}

const clickLeft = () => history.back()

const setInfo = () => {
  state.userName = Mstore.userInfo.user_name
  state.sex = common.sex(Mstore.userInfo.sex)
  state.birthDay = Mstore.userInfo.birthday
  state.workDay = Mstore.userInfo.work_time
  state.city = Mstore.userInfo.city
  state.area = Mstore.userInfo.area
  if (Mstore.userInfo.it_head) {
    state.fileList = [
      {
        url: Mstore.userInfo.it_head
      }
    ]
  }
}

if (!Mstore.userInfo.user_name) {
  ;(async function () {
    await Mstore.getUserInfo()
    setInfo()
  })()
} else {
  setInfo()
}

const cityConfirm = values => {
  state.city = values.selectedOptions[0].text + '-' + values.selectedOptions[1].text
  state.area = values.selectedOptions[1].text
  state.showCity = false
}

const onSelect = item => {
  state.sex = item.name
  state.showSex = false
}

const onSubmit = async () => {
  if (state.fileList.length === 0) {
    showToast('请上传头像')
    return
  }
  if (!state.userName) {
    showToast('填写姓名')
    return
  }
  if (!state.sex) {
    showToast('您还没有选择性别')
    return
  }
  if (!state.birthDay) {
    showToast('请选择出生年月')
    return
  }
  if (!state.workDay) {
    showToast('请选择工作时间')
    return
  }
  if (!state.city) {
    showToast('请选择城市')
    return
  }
  state.loading = true
  const res = await userModify({
    user_name: state.userName,
    sex: state.sex === '男' ? 1 : state.sex === '女' ? 2 : '',
    birthday: state.birthDay,
    work_time: state.workDay,
    city: state.city,
    area: state.area,
    it_head: state.fileList[0].url,
    type: 1
  })
  if (res) {
    Mstore.getUserInfo()
  }
  showToast('修改成功')
  state.loading = false
}
</script>

<template>
  <van-nav-bar title="个人信息" left-arrow @click-left="clickLeft" />

  <div class="user-page">
    <van-form @submit="onSubmit">
      <div class="user-pic">
        <van-uploader
          v-model="state.fileList"
          accept=".jpg,.png"
          :after-read="afterRead"
          :max-count="1"
        />
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
          @select="onSelect"
        />
      </div>
      <div class="user-item">
        <h5>出生日期</h5>
        <van-field
          v-model="state.birthDay"
          readonly
          is-link
          label=""
          placeholder="请选择您的出生年月"
          @click="state.showBirth = true"
        />
        <van-action-sheet v-model:show="state.showBirth">
          <van-date-picker
            title="选择日期"
            :min-date="state.minDate"
            :max-date="state.maxDate"
            :columns-type="state.columnsType"
            @confirm="birthdayConfirm"
            @cancel="state.showBirth = false"
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
        <van-action-sheet v-model:show="state.showWorkDay">
          <van-date-picker
            title="选择日期"
            :min-date="state.minDate"
            :max-date="state.maxDate"
            :columns-type="state.columnsType"
            @confirm="workdayConfirm"
            @cancel="state.showWorkDay = false"
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
      <button class="wy-confirm-btn" native-type="submit">提交修改</button>
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
:deep(.van-image) {
  border-radius: 50%;
}
:deep(.van-cell) {
  padding: 0.8rem 0 0.6rem;
  font-size: 0.8rem;
  line-height: 0.8rem;
  color: #999;
  font-weight: 100;
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
    color: #fff;
  }
}
</style>

<script setup lang="ts">
import { inject } from 'vue'
import { cityList } from '@/api/task'
import { taskStore } from '@/stores/task'
import { Toast } from 'vant'

interface PopupContext {
  closeCitySwitch: (cityName?: string) => void
}

// 注入并进行类型断言
const popupContext = inject('popup') as PopupContext | null

// 检查 popupContext 是否存在
if (!popupContext) {
  throw new Error('popup is not provided')
}

const { closeCitySwitch } = popupContext // 解构出 closeCitySwitch

const store = taskStore()

const leftBack = () => closeCitySwitch()

const getCityList = async () => {
  const res = await cityList()
  if (res) {
    // console.log(res)
    store.setCityList(res)
  } else {
    new Toast('到这里出错了')
  }
}
if (store.cityList.length <= 0) getCityList()
</script>

<template>
  <van-nav-bar title="シティスイッチ" left-arrow @click-left="leftBack()" />
  <div class="city-switch">
    <h3>選択した</h3>
    <div class="city-switch-text">
      <span>{{ store.cityValue }}</span>
    </div>
    <h3>シティスイッチ</h3>
    <div class="city-switch-text">
      <span
        v-for="(item, index) in store.cityList"
        :key="index"
        @click="closeCitySwitch(item.name)"
        >{{ item.name }}</span
      >
    </div>
  </div>
</template>
<style lang="scss" scoped>
.city-switch {
  padding: 0 0.7rem;
  h3 {
    font-size: 0.8rem;
    line-height: 0.8rem;
    font-weight: 500;
    color: #000000;
    margin: 0.7rem 0 0.96rem;
  }
  .city-switch-text span {
    width: 4.01rem;
    height: 1.6rem;
    line-height: 1.6rem;
    background: #ffffff;
    border: 1px solid #ebebeb;
    border-radius: 0.11rem;
    font-size: 0.64rem;
    text-align: center;
    font-weight: 400;
    color: #333333;
    margin: 0 0.7rem 0.8rem 0;
    display: inline-block;
    // 使用 & 符号来嵌套 :nth-child(4n)
    &:nth-child(4n) {
      margin-right: 0px;
    }
  }
}
</style>

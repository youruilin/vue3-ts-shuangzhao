<script setup lang="ts">
import { inject, ref } from 'vue'
import { positionList } from '@/api/task'
import { taskStore } from '@/stores/task'
import { Toast } from 'vant'

interface PopupContext {
  closePositionType: (p?: string) => void
}

// 注入并进行类型断言
const popupContext = inject('popup') as PopupContext | null

// 检查 popupContext 是否存在
if (!popupContext) {
  throw new Error('popup is not provided')
}

const { closePositionType } = popupContext // 解构出 closeCitySwitch

const store = taskStore()

const typeKey = ref(0)
const setTypeKey = (key: number) => {
  typeKey.value = key
}

const leftBack = () => closePositionType()

const getPositionList = async () => {
  const res = await positionList()
  if (res) {
    // console.log(res)
    store.setPositionList(res)
  } else {
    new Toast('到这里出错了')
  }
}
if (store.positionList.length <= 0) getPositionList()
</script>

<template>
  <van-nav-bar title="ポジションタイプ" left-arrow @click-left="leftBack" />
  <div class="position-type">
    <div class="position-type-left">
      <h5
        v-for="(item, index) in store.positionList"
        :key="index"
        :class="typeKey == index ? 'active' : ''"
        @click="setTypeKey(index)"
      >
        {{ item.name }}
      </h5>
    </div>
    <div class="position-type-right">
      <span
        v-for="(item, index) in store.positionList[typeKey] && store.positionList[typeKey].children"
        :key="index"
        @click="closePositionType(item.name)"
      >
        {{ item.name }}
      </span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.position-type {
  display: flex;
  .position-type-left {
    width: 4.77rem;
    height: calc(100vh - 46px);
    background: #f6f6f6;
    h5 {
      width: 4.77rem;
      height: 2.4rem;
      line-height: 2.4rem;
      background: #f6f6f6;
      border-bottom: 1px solid #ffffff;
      font-size: 0.75rem;
      font-weight: 300;
      color: #333333;
      text-align: center;
      &.active {
        background: #efefef;
      }
    }
  }
  .position-type-right {
    padding: 0.8rem 0 0 0.6rem;
    span {
      width: 6.61rem;
      height: 2.03rem;
      line-height: 2.03rem;
      background: #ffffff;
      border: 1px solid #e9e9e9;
      border-radius: 0.11rem;
      font-size: 0.75rem;
      font-weight: 300;
      color: #666666;
      text-align: center;
      margin-right: 0.59rem;
      margin-bottom: 0.64rem;
      display: inline-block;
      &:nth-child(2n) {
        margin-right: 0px;
      }
    }
  }
}
</style>

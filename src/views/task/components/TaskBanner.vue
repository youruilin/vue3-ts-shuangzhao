<script setup lang="ts">
import { taskStore } from '@/stores/task'
// import { bannerList } from '@/api/task'
import { showToast } from 'vant'

import fetchWithBaseUrl from '@/utils/fetch'

const store = taskStore()

const getBannerList = async () => {
  try {
    // 使用 fetch 从本地 JSON 文件加载数据
    const response = await fetchWithBaseUrl('/data/banner.json') // 假设文件在 public/data/banner.json
    if (!response.ok) {
      throw new Error('无法加载本地数据')
    }

    // 将 JSON 文件解析为对象
    const res = await response.json()

    // 判断并处理返回的数据
    if (res.list) {
      console.log(res)
      store.setBannerList(res.list) // 假设 store 是一个全局状态管理对象
    } else {
      showToast(res.msg || '数据格式不正确，缺少 list 字段')
    }
  } catch (error) {
    console.error('加载本地 bannerList 数据失败:', error)
    showToast('加载本地数据出错')
  }
}

// const getBannerList = async () => {
//   const res = await bannerList({
//     type: 2
//   })
//   // 这里也很有意思, if (res) {} else{当中, 推断了 res 为 false, 因此不再允许使用已在 api 接口中定义的返回数据类型}
//   if (res.list) {
//     console.log(res)
//     store.setBannerList(res.list)
//   } else {
//     showToast(res.msg || '到这里出错啦')
//   }
// }
if (store.bannerList.length <= 0) getBannerList()
</script>

<template>
  <van-swipe :autoplay="3000" lazy-render>
    <van-swipe-item v-for="(item, index) in store.bannerList" :key="index">
      <a v-if="item.url" :href="item.url" target="_blank">
        <img :src="item.picture" />
      </a>
      <img v-else :src="item.picture" alt="" />
    </van-swipe-item>
  </van-swipe>
</template>

<style lang="scss" scoped>
:root {
  .van-swipe {
    height: 7.47rem;
    border-radius: 0.5rem;
  }
  .van-swipe__indicators {
    display: none;
  }
}

img {
  width: 100%;
  height: 7.47rem;
  border-radius: 0.5rem;
}
</style>

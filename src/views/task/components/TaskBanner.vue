<script setup lang="ts">
import { taskStore } from '@/stores/task'
import { bannerList } from '@/api/task'
import { showToast } from 'vant'

const store = taskStore()

const getBannerList = async () => {
  const res = await bannerList({
    type: 2
  })
  // 这里也很有意思, if (res) {} else{当中, 推断了 res 为 false, 因此不再允许使用已在 api 接口中定义的返回数据类型}
  if (res.list) {
    console.log(res)
    store.setBannerList(res.list)
  } else {
    showToast(res.msg || '到这里出错啦')
  }
}
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
  .van-swipe__track {
    height: 7.47rem;
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

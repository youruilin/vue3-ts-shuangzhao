<script setup lang="ts">
import { ref } from 'vue'
import { getPolicy } from '@/api/user'
import { Toast } from 'vant'

const state = ref({
  htmlText: ''
})

const onClickLeft = () => history.back()
const getPolicyChange = async () => {
  const res = await getPolicy({
    id: 17
  })
  if (res) {
    state.value.htmlText = res.records[0].content
  } else {
    new Toast('请求失败')
  }
}

getPolicyChange()
</script>

<template>
  <van-nav-bar title="隐私政策" left-text="" left-arrow @click-left="onClickLeft" />
  <div class="text-agree" v-html="state.htmlText"></div>
</template>
<style scoped>
.body {
  background: none;
}
.text-agree {
  padding: 0.5rem 0.7rem;
}
</style>

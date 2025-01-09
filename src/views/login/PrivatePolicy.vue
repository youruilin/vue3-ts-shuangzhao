<script setup lang="ts">
import { ref } from 'vue'
import { getPolicy } from '@/api/user'
import { showToast } from 'vant'

const state = ref({
  htmlText: ''
})

const onClickLeft = () => history.back()
const getPolicyChange = async () => {
  const res = await getPolicy({
    id: 1
  })
  if (res) {
    state.value.htmlText = res.content
  } else {
    showToast('这里出错啦')
  }
}

getPolicyChange()
</script>

<template>
  <van-nav-bar title="隐私政策" left-text="" left-arrow @click-left="onClickLeft" />
  <div class="text-agree" v-html="state.htmlText.replace(/\n/g, '<br>')"></div>
</template>
<style scoped>
.text-agree {
  padding: 0.5rem 0.7rem;
}
</style>

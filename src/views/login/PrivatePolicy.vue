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
    id: 16
  })
  if (res) {
    state.value.htmlText = res.records[0].content
  } else {
    new Toast(res.msg)
  }
}

getPolicyChange()
</script>

<template>
  <van-nav-bar title="隐私政策" left-text="" left-arrow @click-left="onClickLeft" />
  <div class="text-agree" v-html="state.htmlText"></div>
</template>
<style scoped>
.text-agree {
  padding: 0.5rem 0.7rem;
}
</style>

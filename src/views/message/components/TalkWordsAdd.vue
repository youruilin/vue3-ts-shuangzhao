<script setup lang="ts">
import { reactive } from 'vue'
const state = reactive({
  message: ''
})
</script>

<template>
  <van-nav-bar title="添加快捷短语" left-arrow>
    <template #right>
      <span>完成</span>
    </template>
  </van-nav-bar>
  <van-cell-group inset>
    <van-field
      v-model="state.message"
      rows="2"
      autosize
      type="textarea"
      maxlength="120"
      placeholder="通常の応答を入力してください。電子メールやその他の連絡先情報、広告情報などは入力しないでください。"
      show-word-limit
    />
  </van-cell-group>
</template>

<style scoped>
:deep(.van-field__word-num) {
  color: #ff9415;
}
:deep(van-field__word-limit) {
  color: #999;
}
</style>

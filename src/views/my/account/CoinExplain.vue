<script setup>
import { ref, onMounted } from 'vue'

// 定义一个 ref 变量来存储文件路径
const filePath = ref('')

// 使用 onMounted 钩子获取文件路径
onMounted(() => {
  // 通过 import.meta.url 获取当前文件的路径
  filePath.value = import.meta.url
})
</script>

<template>
  <div>{{ filePath }}</div>
  <!-- 显示文件路径 -->
</template>

<style lang="scss" scoped>
/* 你可以在这里添加样式 */
</style>

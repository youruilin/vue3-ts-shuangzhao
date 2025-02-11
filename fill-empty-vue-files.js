import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// 获取当前脚本文件的路径并设置 src 目录路径
const currentDir = fileURLToPath(import.meta.url)
const vueDir = path.resolve(path.dirname(currentDir), 'src')

// 扫描文件夹中的所有 .vue 文件
const scanVueFiles = dir => {
  const files = fs.readdirSync(dir)
  files.forEach(file => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)

    // 如果是文件夹，则递归扫描
    if (stat.isDirectory()) {
      scanVueFiles(filePath)
    } else if (file.endsWith('.vue')) {
      processVueFile(filePath)
    }
  })
}

// 处理每个 Vue 文件
const processVueFile = filePath => {
  const content = fs.readFileSync(filePath, 'utf-8').trim()

  // 如果文件为空，填充基本模板
  if (content === '') {
    console.log(`Filling empty Vue file: ${filePath}`)
    const templateContent = `
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
  \n`
    fs.writeFileSync(filePath, templateContent.trim(), 'utf-8')
  }
}

// 扫描并填充 Vue 文件
scanVueFiles(vueDir)

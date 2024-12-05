<script setup lang="ts">
import { inject, reactive, watch } from 'vue'
import { chatMessageWordsAdd, chatMessageWordsEdit } from '@/api/message'
import { showDialog, Dialog, showToast } from 'vant'

interface fatherProps {
  title?
  id?
  text?
}

const { title, id, text } = defineProps<fatherProps>()

const state = reactive({
  value: text || ''
})

watch(
  () => text,
  newText => {
    state.value = newText || '' // 同步更新 state.value
  }
)

interface PopupContext {
  closeWordsAdd: () => void
}

const { closeWordsAdd } = inject<PopupContext>('popup')!

const wordsClose = () => {
  closeWordsAdd()
  state.value = ''
}

const WordsAdd = async () => {
  if (!state.value) {
    console.log('即将显示 Toast')
    console.log(Dialog)

    // 正确的调用方式
    showDialog({
      title: '提示',
      message: '请还没有输入内容'
    })
    console.log('Toast 显示完毕')
    return
  }
  let res = null
  if (id) {
    res = await chatMessageWordsEdit({
      id: id,
      text: state.value
    })
  } else {
    res = await chatMessageWordsAdd({
      text: state.value
    })
  }
  if (res) {
    showToast('添加成功')
    state.value = ''
    closeWordsAdd()
  } else {
    showToast('未返回res')
  }
}
</script>

<template>
  <van-nav-bar :title="title" left-arrow @click-left="wordsClose">
    <template #right>
      <span @click="WordsAdd">完成</span>
    </template>
  </van-nav-bar>
  <van-cell-group inset>
    <van-field
      v-model="state.value"
      rows="2"
      autosize
      type="textarea"
      maxlength="120"
      placeholder="通常の応答を入力してください。電子メールやその他の連絡先情報、広告情報などは入力しないでください。"
      show-word-limit
    />
  </van-cell-group>
</template>

<style lang="scss" scoped>
:deep(.van-field__word-num) {
  color: #ff9415;
}
:deep(.van-field__word-limit) {
  color: #999;
}

:deep(.van-popup) {
  background: transparent !important;
}
</style>

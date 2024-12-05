<script setup lang="ts">
import { inject } from 'vue'

interface emojiChangeProps {
  emojiChange: (value) => void
}

const { emojiChange } = inject<emojiChangeProps>('popup')!

const list = [
  '😀',
  '😁',
  '😂',
  '😃',
  '😄',
  '😅',
  '😆',
  '😉',
  '😊',
  '😋',
  '😎',
  '😍',
  '😘',
  '😗',
  '😙',
  '😚',
  '😇',
  '😐',
  '😑',
  '😶',
  '😏'
]
</script>

<template>
  <div>
    <span v-for="(item, index) in list" :key="index" in list @click="emojiChange(item)">{{
      item
    }}</span>
  </div>
</template>

<style lang="scss" scoped>
div {
  height: 8rem;
  span {
    width: 14.28%;
    display: inline-block;
    text-align: center;
    margin-bottom: 0.32rem;
    font-size: 1.4rem;
  }
}
</style>

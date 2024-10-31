<script setup lang="ts">
import { reactive } from 'vue'
import MessageList from '@/components/list/MessageList.vue'
const messageList = reactive([{ id: 1 }, { id: 2 }])
</script>

<template>
  <MessageList :message-list="messageList"></MessageList>
</template>

<style scoped></style>

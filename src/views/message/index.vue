<script setup lang="ts">
import MessageList from '@/components/list/MessageList.vue'
import { messageStore } from '@/stores/message'
const store = messageStore()
store.getSystemMessageList()
store.getChatMessageList()
</script>

<template>
  <MessageList :message-list="store.systemNewMessage" type="system"></MessageList>
  <MessageList :message-list="store.messageList" type="talk"></MessageList>
</template>

<style scoped></style>

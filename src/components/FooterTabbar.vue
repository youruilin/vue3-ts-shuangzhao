<script setup lang="ts">
import { ref } from 'vue'
const active = ref('task')
</script>

<template>
  <!-- vue2 => v-model  :value 和 @input 的简写 -->
  <!-- vue3 => v-model  :modelvalue 和 @update:modelValue 的简写 -->
  <!-- <van-tabbar :modelValue="active" @update:modelValue="active = $event"></van-tabbar> -->
  <van-tabbar v-model="active" active-color="#fe9527">
    <van-tabbar-item name="task" icon="todo-list-o" to="/task">任务</van-tabbar-item>
    <van-tabbar-item name="contract" icon="balance-list-o" to="/contract">合约</van-tabbar-item>
    <van-tabbar-item name="message" icon="friends-o" to="/message">消息</van-tabbar-item>
    <van-tabbar-item name="my" icon="user-o" to="/my">我的</van-tabbar-item>
  </van-tabbar>
</template>

<style scoped></style>

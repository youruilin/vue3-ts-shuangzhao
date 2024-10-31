<script setup>
import { reactive } from 'vue'
import TaskList from '@/components/list/TaskList.vue'
const taskList = reactive([{ id: 1 }, { id: 2 }])
</script>

<template>
  <TaskList :task-list="taskList"></TaskList>
</template>

<style lang="scss" scoped></style>

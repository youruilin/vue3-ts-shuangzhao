<script setup lang="ts">
import { reactive } from 'vue'
import TalentList from '@/components/list/TalentList.vue'
const talentList = reactive([
  {
    id: 1,
    name: '张三',
    age: 18,
    city: '北京',
    skill: ['vue', 'node.js', '小程序'],
    projectCount: 10
  },
  {
    id: 2,
    name: '李四',
    age: 20,
    city: '上海',
    skill: ['vue', 'node.js', '小程序'],
    projectCount: 20
  }
])
</script>

<template>
  <TalentList :talent-list="talentList"></TalentList>
</template>

<style scoped></style>

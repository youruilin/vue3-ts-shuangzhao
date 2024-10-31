<script setup>
import { reactive } from 'vue'
import ContractList from '@/components/list/ContractList.vue'
const contractList = reactive([{ id: 1 }, { id: 2 }])
</script>
<template>
  <ContractList :contract-list="contractList"></ContractList>
</template>

<style scoped></style>

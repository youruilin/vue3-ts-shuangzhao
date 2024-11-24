<script setup lang="ts">
// interface itemProps {
//   contract_I_state
//   contract_II_state
//   contract_III_state
// }

const { item } = defineProps<{
  item
}>()

const contractState = index => {
  if (index === 1) return 'green'
  if (index === 2) return 'orange'
  if (index === 3) return 'red'
  return ''
}
</script>

<template>
  <div class="contract-progress">
    <i :class="contractState(item.contract_I_state)"></i>
    <i :class="contractState(item.contract_II_state)"></i>
    <i :class="contractState(item.contract_III_state)"></i>
    <i :class="contractState(item.contract_III_state)"></i>
  </div>
</template>

<style lang="scss" scoped>
.contract-progress {
  display: flex;
  height: 0.53rem;
  width: 100%;
  i {
    flex: 1;
    background: #f3f3f3;
    margin: 0 1px;
  }
  .green {
    background: #50d400;
  }
  .orange {
    background: #fe9215;
  }
  .red {
    background: #fe4800;
  }
}
</style>

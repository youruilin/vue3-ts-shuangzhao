<script setup lang="ts">
// 如果父组件已经为传递的 props 声明了类型，子组件不必再次声明。
// 这主要是因为 props 是由父组件传递给子组件的，子组件通过 defineProps 接收父组件传递的类型，而不需要再次定义。
const { item } = defineProps<{
  item
}>()
</script>

<template>
  <div class="company-source">
    <img :src="item.logo" alt="" />
    <div>
      <h5>{{ item.company_name }}</h5>
      <p>{{ item.city }} · {{ item.area }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.company-source {
  display: flex;
  align-items: center;
  margin: 0.91rem 0;
  border-bottom: 1px solid #f0f0f0;
  padding-left: 0.67rem;
  padding-bottom: 0.91rem;
  img {
    width: 2.67rem;
    height: 2.67rem;
    border-radius: 1.34rem;
    margin-right: 0.61rem;
  }
  h5 {
    font-size: 0.8rem;
    line-height: 0.8rem;
    font-weight: 300;
    color: #333333;
    margin-bottom: 0.51rem;
  }
  p {
    font-size: 0.69rem;
    line-height: 0.69rem;
    font-weight: 100;
    color: #666666;
  }
}
</style>

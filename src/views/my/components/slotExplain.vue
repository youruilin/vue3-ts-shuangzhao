<script setup lang="ts"></script>

<template>
  <div class="content">
    <slot></slot>
    <p>本页面最终解释权归demo平台所有</p>
  </div>
</template>

<style scoped>
.content {
  padding: 0.67rem 0.77rem;
}
p {
  font-size: 0.53rem;
  color: #666;
}
</style>

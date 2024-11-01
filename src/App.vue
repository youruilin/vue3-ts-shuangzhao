<script setup lang="ts"></script>

<template>
  <RouterView />
  <FooterTabbar v-if="$route.path !== '/login'"></FooterTabbar>
</template>

<style scoped></style>

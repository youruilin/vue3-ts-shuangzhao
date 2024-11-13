<script setup lang="ts"></script>

<template>
  <RouterView />
  <FooterTabbar
    v-if="!$route.path.startsWith('/login') && !$route.path.startsWith('/task/TaskDetails')"
  ></FooterTabbar>
</template>

<style scoped></style>

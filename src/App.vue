<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
// 控制 FooterTabbar 的显示与隐藏
const showFooter = ref(true)
let lastScrollTop = 0 // 上一次的滚动位置
// eslint-disable-next-line no-undef
let scrollTimeout: NodeJS.Timeout | null = null // 用于监听停止滚动的定时器

// 滚动事件逻辑
function handleScroll() {
  const scrollTop = document.documentElement.scrollTop

  if (scrollTop > lastScrollTop) {
    // 向下滚动，隐藏 Footer
    showFooter.value = false
  } else if (scrollTop < lastScrollTop) {
    // 向上滚动，显示 Footer
    showFooter.value = true
  }

  // 设置停止滚动后的逻辑
  if (scrollTimeout) clearTimeout(scrollTimeout)
  scrollTimeout = setTimeout(() => {
    showFooter.value = true // 停止滚动后归位
  }, 900)

  lastScrollTop = scrollTop
}

// 监听滚动事件
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  if (scrollTimeout) clearTimeout(scrollTimeout)
})
</script>

<template>
  <RouterView />
  <transition name="footer-transition">
    <!-- 动态显示 FooterTabbar -->
    <FooterTabbar
      v-show="
        showFooter &&
        !$route.path.startsWith('/login') &&
        !$route.path.startsWith('/task/TaskDetails') &&
        !$route.path.startsWith('/contract/ContractDetails') &&
        !$route.path.startsWith('/contract/ContractProgress')
      "
    />
  </transition>
</template>

<style scoped>
/* 过渡动画 */
.footer-transition-enter-active,
.footer-transition-leave-active {
  transition:
    transform 0.7s ease,
    opacity 0.7s ease;
}

/* 隐藏时向下滑动并变透明 */
.footer-transition-enter-from,
.footer-transition-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

/* 显示时恢复正常位置 */
.footer-transition-enter-to,
.footer-transition-leave-from {
  transform: translateY(0);
  opacity: 1;
}
</style>

import { createRouter, createWebHistory } from 'vue-router'
import generatedRoutes from 'virtual:generated-pages'
import { userStore } from '@/stores/user'

// 动态获取 basePath，确保开发环境和生产环境一致
const basePath = import.meta.env.MODE === 'production' ? '/vue3-ts-shuangzhao/' : '/'

const routes = [
  ...generatedRoutes,
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/404.vue')
  }
]
const router = createRouter({
  history: createWebHistory(basePath),
  routes
})

// 增加全局导航守卫
router.beforeEach((to, from, next) => {
  const store = userStore()
  // 验证token
  if (store.token) {
    // 检查是否为首页路径，如果是则跳转到 /task
    if (to.path === '/') {
      console.log(basePath)
      next('/task')
    } else {
      next()
    }
  } else {
    if (
      to.path === '/login' ||
      to.path === '/login/ServiceAgree' ||
      to.path === '/login/PrivatePolicy'
    ) {
      console.log(basePath)
      next()
    } else {
      console.log(basePath)

      next('/login')
    }
  }
})

export default router

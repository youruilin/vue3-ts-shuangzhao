import { createRouter, createWebHistory } from 'vue-router'
import generatedRoutes from 'virtual:generated-pages'
import { userStore } from '@/stores/user'
const routes = [
  ...generatedRoutes
  // {
  //   path: '/:pathMatch(.*)*',
  //   name: 'not-found',
  //   component: () => import('@/views/404.vue')
  // }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

// 增加全局导航守卫
router.beforeEach((to, from, next) => {
  const store = userStore()
  // 验证token
  if (store.token) {
    next()
  } else {
    if (
      to.path === '/login' ||
      to.path === '/login/ServiceAgree' ||
      to.path === '/login/PrivatePolicy'
    ) {
      next()
    } else {
      next('/login')
    }
  }
})
export default router

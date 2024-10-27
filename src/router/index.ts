import { createRouter, createWebHistory } from 'vue-router'
// import type { RouteRecordRaw } from 'vue-router'
// const routes: Array<RouteRecordRaw> = [
//   {
//     path: '/login',
//     component: () => import('@/views/login/index.vue')
//   },
//   {
//     path: '/login/serviceAgree',
//     component: () => import('@/views/login/serviceAgree.vue')
//   },
//   {
//     path: '/login/privatePolicy',
//     component: () => import('@/views/login/privatePolicy.vue')
//   },
//   {
//     path: '/task',
//     component: () => import('@/views/task/index.vue')
//   },
//   {
//     path: '/task/search',
//     component: () => import('@/views/task/taskSearch.vue')
//   },
//   {
//     path: '/task/details/:id',
//     component: () => import('@/views/task/taskDetails.vue')
//   },
//   {
//     path: '/task/companySource/:id',
//     component: () => import('@/views/task/companySource.vue')
//   },
//   {
//     path: '/contract',
//     component: () => import('@/views/contract/index.vue')
//   },
//   {
//     path: '/contract/details/:id',
//     component: () => import('@/views/contract/details.vue')
//   },
//   {
//     path: '/contract/progress/:id',
//     component: () => import('@/views/contract/progress.vue')
//   },
//   {
//     path: '/message/progress',
//     component: () => import('@/views/message/index.vue')
//   },
//   {
//     path: '/message/systemList',
//     component: () => import('@/views/message/systemList.vue')
//   },
//   {
//     path: '/message/systemDetails/:id',
//     component: () => import('@/views/message/systemDetails.vue')
//   },
//   {
//     path: '/message/talk/:id',
//     component: () => import('@/views/message/talk.vue')
//   }
// ]

// import routes from 'virtual:generated-pages'

import generatedRoutes from 'virtual:generated-pages'
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
export default router

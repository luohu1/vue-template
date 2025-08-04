import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

// import EmptyLayout from '@/layouts/EmptyLayout.vue'

const staticRoutes: RouteRecordRaw[] = []

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'index',
    // component: EmptyLayout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/Home.vue'),
      },
    ],
  },
  ...staticRoutes,
  {
    /**
     * 匹配任意路径
     */
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('@/views/exception/404.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

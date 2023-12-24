import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '@/views/DashboardView.vue'
import ProductSingleView from '@/views/ProductSingleView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard_home',
      component: DashboardView
    },
    {
      path: '/lab-test',
      name: 'lab_test',
      component: DashboardView
    },
    {
      path: '/appointment',
      name: 'appointment',
      component: DashboardView
    },
    {
      path: '/medicine-order',
      name: 'medicine_order',
      component: DashboardView
    },
    {
      path: '/message',
      name: 'message',
      component: DashboardView
    },
    {
      path: '/payment',
      name: 'payment',
      component: DashboardView
    },
    {
      path: '/settings',
      name: 'settings',
      component: DashboardView
    },
    {
      path: '/help',
      name: 'help',
      component: DashboardView
    },
    {
      path: '/account',
      name: 'account',
      component: DashboardView
    },
    {
      path: '/notifications',
      name: 'notifications',
      component: DashboardView
    },
    {
      path: '/product',
      name: 'product',
      component: ProductSingleView
    }
  ]
})

export default router

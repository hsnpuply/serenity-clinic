import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Example from '@/pages/Example.vue';
import KtuiPage from '@/pages/KtuiPage.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    redirect: '/ktui'
  },
  {
    path: '/example',
    name: 'Example',
    component: Example
  },
  {
    path: '/ktui',
    name: 'KtuiPage',
    component: KtuiPage
  }
];

const router = createRouter({
  history: createWebHistory('/'),
  routes
});

export default router;

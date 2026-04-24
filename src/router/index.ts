import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Example from '@/pages/Example.vue';
import PrimeVuePage from '@/pages/PrimeVuePage.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    redirect: '/primevue'
  },
  {
    path: '/example',
    name: 'Example',
    component: Example
  },
  {
    path: '/primevue',
    name: 'PrimeVuePage',
    component: PrimeVuePage
  }
];

const router = createRouter({
  history: createWebHistory('/'),
  routes
});

export default router;

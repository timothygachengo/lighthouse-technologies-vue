import { createRouter, createWebHistory } from 'vue-router';
import Layout from '@/layout/index.vue';
import HomeViewVue from '@/views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Layout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeViewVue
        }
      ]
    } 
  ]
})

export default router

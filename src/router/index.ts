import { createRouter, createWebHistory } from 'vue-router';
import App from '@/App.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/wedding',
      component: () => App,
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: (to) => ({
        path: '/wedding',
        query: to.query,
      }),
    },
  ],
});

export default router;

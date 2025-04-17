import { createRouter, createWebHistory } from 'vue-router';
import App from '@/App.vue';
import Constants from '@/utils/constants';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: Constants.ROUTE.WEDDING,
      component: App,
    },
    {
      path: Constants.ROUTE.PATH_MATCH_ANY,
      redirect: (to) => ({
        path: Constants.ROUTE.WEDDING,
        query: to.query,
      }),
    },
  ],
});

export default router;

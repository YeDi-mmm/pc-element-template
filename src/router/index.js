import { createRouter, createWebHashHistory } from 'vue-router';

import appRouters from './modules/app';

const routes = [...appRouters];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return {
      el: '#app',
      top: 0,
      behavior: 'smooth',
    };
  },
});

export default router;
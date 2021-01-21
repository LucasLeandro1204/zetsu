import NotFound from './views/NotFound.vue';
import User from './views/User/User.vue';
import Dashboard from './views/Dashboard/Dashboard.vue';
import { createRouter, createWebHistory } from 'vue-router';

export default createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
    },

    {
      path: '/user',
      name: 'user',
      component: User,
    },

    {
      path: '/:pathMatch(.*)',
      component: NotFound,
    },
  ],
});

import Creator from './views/Creator/Creator.vue';
import { createRouter, createWebHistory } from 'vue-router';

export default createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: '/',
      name: 'creator',
      component: Creator,
    },
  ],
});

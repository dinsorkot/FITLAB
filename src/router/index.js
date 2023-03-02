import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue';
import SigninView from '../views/SigninView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/signin',
      name: 'signin',
      component: SigninView
    },    
    {
      path: '/main',
      name: 'main',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/MainView.vue')
    },
  ]
})

export default router

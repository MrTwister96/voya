import { createRouter, createWebHistory } from '@ionic/vue-router';

import HomePage from '@/pages/HomePage.vue';
import AuthPage from '@/pages/AuthPage.vue';

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/auth',
    name: 'Auth',
    component: AuthPage
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../pages/RegisterPage.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../pages/LoginPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

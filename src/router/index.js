import { createRouter, createWebHistory } from '@ionic/vue-router';

import HomePage from '@/pages/HomePage.vue';
import AddTripPage from '@/pages/AddTripPage.vue';
import StartTripPage from '@/pages/StartTripPage.vue';
import EndTripPage from '@/pages/EndTripPage.vue';
import AuthPage from '@/pages/AuthPage.vue';
import RegisterPage from '@/pages/RegisterPage.vue';
import LoginPage from '@/pages/LoginPage.vue';
import store from "../store/index";

import { auth } from '../firebase';

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage,
    meta: { requiresAuth: true }
  },
  {
    path: '/addtrip',
    name: 'AddTrip',
    component: AddTripPage,
    meta: { requiresAuth: true }
  },
  {
    path: '/starttrip',
    name: 'StartTrip',
    component: StartTripPage,
    meta: { requiresAuth: true }
  },
  {
    path: '/endtrip',
    name: 'EndTrip',
    component: EndTripPage,
    meta: { requiresAuth: true }
  },
  {
    path: '/auth',
    name: 'Auth',
    component: AuthPage
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterPage
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)

  if (requiresAuth && !auth.currentUser) {
    next('/auth')
  } else if (auth.currentUser && (to.name === "Auth" || to.name === "Register" || to.name === "Login")) {
    next("/")
  } else if (auth.currentUser && (to.name == "StartTrip" && store.state.activeTrip != null)) {
    next("/")
  } else if (auth.currentUser && (to.name == "EndTrip" && store.state.activeTrip == null)) {
    next("/")
  } else {
    next()
  }
})

export default router

import Vue from 'vue';
import VueRouter from 'vue-router';
import { store } from '../store/store';
import EmptyLayout from '../layouts/empty.vue';
import DashboardLayout from '../layouts/dashboard.vue';
import * as authTypes from '../store/modules/auth/auth-types';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: EmptyLayout,
    meta: {
      requiresAuth: false,
    },
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/home.vue'),
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('../views/auth/login.vue'),
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import('../views/auth/register.vue'),
      },
    ],
  },
  {
    path: '/dashboard',
    meta: {
      requiresAuth: true,
    },
    component: DashboardLayout,
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: () => import('../views/dashboard.vue'),
      },
    ],
  },
  {
    path: '/about',
    meta: {
      requiresAuth: true,
    },
    component: DashboardLayout,
    children: [
      {
        path: '',
        name: 'About',
        component: () => import('../views/about.vue'),
      },
    ],
  },
  {
    path: '/expenses',
    meta: {
      requiresAuth: true,
    },
    component: DashboardLayout,
    children: [
      {
        path: '',
        name: 'ExpenseHome',
        component: () => import('../views/expense/home.vue'),
      },
    ],
  },
  {
    path: '/goals',
    meta: {
      requiresAuth: true,
    },
    component: DashboardLayout,
    children: [
      {
        path: '',
        name: 'GoalsHome',
        component: () => import('../views/goals/home.vue'),
      },
    ],
  },
  {
    path: '/expense-book',
    meta: {
      requiresAuth: true,
    },
    component: DashboardLayout,
    children: [
      {
        path: '',
        name: 'ExpenseBookHome',
        component: () => import('../views/expense-book/home.vue'),
      },
    ],
  },
  {
    path: '/calendar',
    meta: {
      requiresAuth: true,
    },
    component: DashboardLayout,
    children: [
      {
        path: '',
        name: 'CalendarHome',
        component: () => import('../views/calendar/home.vue'),
      },
    ],
  },
  {
    path: '/income',
    meta: {
      requiresAuth: true,
    },
    component: DashboardLayout,
    children: [
      {
        path: '',
        name: 'IncomeHome',
        component: () => import('../views/income/home.vue'),
      },
    ],
  },
  {
    path: '/reports',
    meta: {
      requiresAuth: true,
    },
    component: DashboardLayout,
    children: [
      {
        path: '',
        name: 'ReportsHome',
        component: () => import('../views/reports/home.vue'),
      },
    ],
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import('../views/404.vue'),
  },
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const allowedRoutes = ['Login', 'Register', 'Home'];
  if (allowedRoutes.indexOf(to.name) === -1) {
    // Protected routes, load profile data if not available in vuex store
    if (!store.state.auth.profileData) {
      store.dispatch(authTypes.GET_PROFILE_DATA_ACTION);
    }
  }
  next();
});

export default router;

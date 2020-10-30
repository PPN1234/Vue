import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/home.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/show',
    name: 'Show',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/about.vue'),
  },
  {
    path: '/title',
    name: 'Title', 
    component: () => import('../views/title.vue'),
  },
  {
    path: '/login',
    name: 'Login', 
   
    component: () => import('../views/login.vue'),
  },
  {
    path: '/dkg',
    name: 'DKG',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/dkg.vue'),
  },
  {
    path: '/link',
    name: 'LINK',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/for.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

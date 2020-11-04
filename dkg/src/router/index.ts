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
    path: '/page1',
    name: 'Page1',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/page1.vue'),
  },
  {
    path: '/page2',
    name: 'Page2', 
    component: () => import('../views/page2.vue'),
  },
  {
    path: '/page3',
    name: 'Page3', 
    component: () => import('../views/page3.vue'),
  },
  {
    path: '/page4',
    name: 'Page4',
    component: () => import('../views/page4.vue'),
  },
  {
    path: '/page5',
    name: 'Page5',
    component: () => import('../views/page5.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

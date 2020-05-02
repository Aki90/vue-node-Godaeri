import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMeta from 'vue-meta';
import store from '@/store';

Vue.use(VueRouter);
Vue.use(VueMeta);

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('@/views/Main.vue'),
  },
  {
    path: '/introduce',
    name: 'Introduce',
    component: () => import('@/views/Introduce.vue'),
  },
  {
    path: '/menu',
    name: 'Menu',
    component: () => import('@/views/Menu.vue'),
  },
  {
    path: '/info',
    name: 'Info',
    component: () => import('@/views/Info.vue'),
  },
  // Auth
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('@/views/Signup.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue'),
  },

  // POST
  {
    path: '/posts',
    name: 'Posts',
    component: () => import('@/views/posts/index.vue'),
  },
  {
    path: '/posts/create',
    name: 'PostsCreate',
    meta: { auth: true },
    component: () => import('@/views/posts/PostsCreate.vue'),
  },
  {
    path: '/post/:id',
    meta: { auth: true },
    component: () => import('@/views/posts/PostList.vue'),
  },
  {
    path: '/post/:id/edit',
    meta: { auth: true },
    component: () => import('@/views/posts/PostEdit.vue'),
  },
  {
    path: '*',
    name: 'NotFoundPage',
    component: () => import('@/views/error/NotFoundPage.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.auth && !store.getters.isLogin) {
    alert('로그인 후 확인하실 수 있습니다.');
    next({ path: '/login' });
    return false;
  }
  next();
});

export default router;

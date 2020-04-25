import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

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
  {
    path: '*',
    name: 'NotFoundPage',
    component: () => import('@/views/error/NotFoundPage.vue'),
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
    component: () => import('@/views/posts/PostEdit.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    console.log('인증이 필요합니다.');
  }
  next();
});

export default router;

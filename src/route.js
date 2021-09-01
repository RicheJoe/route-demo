import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routes = [
  {
    path: '',
    redirect: '/index',
  },
  {
    path: '/index',
    component: () => import('./components/index.vue'),
    name: 'mainIndex',
  },
  {
    path: '/hello/:id/post/:post_id',
    component: () => import('./components/helloWorld.vue'),

    children: [
      {
        // 当 /user/:id/profile 匹配成功，
        // UserProfile 会被渲染在 User 的 <router-view> 中
        path: 'world1',
        component: () => import('./components/helloWorld1.vue'),
        name: 'world1',
      },
      {
        // 当 /user/:id/posts 匹配成功
        // UserPosts 会被渲染在 User 的 <router-view> 中
        path: 'world2',
        component: () => import('./components/helloWorld2.vue'),
      },
    ],
  },
  {
    path: '/hello',
    component: () => import('./components/hello.vue'),
    name: 'hello',
  },

  {
    path: '/detail',
    component: () => import('./components/detail.vue'),
    name: 'detail',
  },
  {
    path: '/venom',
    component: () => import('./components/venom.vue'),
    name: 'venom',
  },
];

const router = new VueRouter({
  mode: 'history',
  routes, // (缩写) 相当于 routes: routes
});

export default router;

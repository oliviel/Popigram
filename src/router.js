import Vue from 'vue';
import Router from 'vue-router';
import CreatePost from './views/CreatePost.vue';
import PostList from './views/PostList.vue';
import ShowPost from './views/ShowPost.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'post-list',
      component: PostList,
    },
    {
      path: '/post/create',
      name: 'post-create',
      component: CreatePost,
    },
    {
      path: '/post/:id',
      name: 'post-show',
      component: ShowPost,
      props: true,
    },
  ],
});

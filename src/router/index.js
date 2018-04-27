import Vue from 'vue';
import Router from 'vue-router';
import Movie from '@/views/Movie';
import DoubanTv from '@/views/DoubanTv';
import Chart from '@/views/Chart';
import Comment from '@/views/Comment';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Movie',
      component: Movie
    },
    {
      path: '/tv',
      name: 'DoubanTv',
      component: DoubanTv
    },
    {
      path: '/chart',
      name: 'Chart',
      component: Chart
    },
    {
      path: '/comment',
      name: 'Comment',
      component: Comment
    },
  ]
});

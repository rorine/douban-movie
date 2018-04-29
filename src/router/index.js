import Vue from 'vue';
import Router from 'vue-router';
import Movie from '@/views/Movie';
import MovieDetail from '@/views/MovieDetail';
import MovieList from '@/views/MovieList';
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
      path: '/movie/detail/:movieID',
      name: 'movieDetail',
      component: MovieDetail
    },
    {
      path: '/movie/list',
      name: 'movieList',
      component: MovieList
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

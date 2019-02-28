import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/page/home/index';
import Detail from '@/page/home/detail';
import Question from '@/page/question/question';
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },
    {
      path: '/question',
      name: 'question',
      component: Question
    }
  ]
})

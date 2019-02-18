import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/page/home/index';
import Detail from '@/page/home/detail';
import MyFlex from '@/page/home/index';
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: MyFlex
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },
    {
      path: '/flex',
      name: 'MyFlex',
      component: Index
    }
  ]
})

import Vue from 'vue';
import Router from 'vue-router';
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
    }
  ]
})

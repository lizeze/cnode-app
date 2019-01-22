import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/home/index'
import Detail from '@/page/home/detail'
Vue.use(Router)

export default new Router({
  type:history,
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

  ]
})

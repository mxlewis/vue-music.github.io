import Vue from 'vue'
import Router from 'vue-router'


import home from '@/views/home_page/home'
import playHome from '@/views/play_page/playHome'
import order from '@/views/order_page/order'
import topli from '@/views/order_page/topli'


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/playHome',
      name: 'playHome',
      component: playHome
    },
    {
      path: '/order',
      name: 'order',
      component: order
    },
    {
      path: '/topli',
      name: 'topli',
      component: topli
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'

import Goods from '../components/goods/goods.vue'
import Ratings from '../components/ratings/ratings.vue'
import Seller from '../components/seller/seller.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/goods',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/ratings',
      name: 'Ratings',
      component: Ratings
    },
    {
      path: '/Seller',
      name: 'Seller',
      component: Seller
    }
  ]
})


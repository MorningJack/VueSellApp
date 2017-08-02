import Vue from 'vue'
import Router from 'vue-router'
// 路由异步加载
// const Foo = resolve => require(['./Foo.vue'], resolve)
// 路由异步分组
// const Foo = r => require.ensure([], () => r(require('./Foo.vue')), 'group-foo')
import Home from './components/homePage/Home'
import Homepage1 from './components/Home_page1'
import SideBar from './components/common/SideBar'

import Classify from './components/homePage/Classify'
import Classifypage1 from './components/Classify_page1'

import Mine from './components/homePage/Mine'

// 模块化中使用
Vue.use(Router)

// 定义路由规则
const router = new Router({
  hashbang: false,
  routes: [
    {
      path: '/',
      components: {
        default: Home,
        sideBar: SideBar
      }
    },
    {
      path: '/home/homePage1',
      component: Homepage1
    },
    {
      path: '/mine',
      component: Mine
    },
    {
      path: '/classify',
      component: Classify
    },
    {
      path: '/classify/classifyPage1',
      component: Classifypage1
    }
  ]
})

// 路由切换
router.beforeEach((to, from, next) => {
  setTimeout(next, 50)
})
export default router

import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const  router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/product',
      name: 'share1',
      component: () => import('@/views/share1/productshare'),
      meta: {
        title: '商品分享'
      }
    },
    {
      path: '/group',
      name: 'share2',
      component: () => import('@/views/share2/groupshare'),
      meta: {
        title: '拼团分享'
      }
    }
  ]
})

// 设置title
router.afterEach((to, from) => {
  window.document.title = to.meta.title
})

export default router

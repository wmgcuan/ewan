import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'

import Page from '@/pages/page'

import Nest from '@/pages/nest'
import a from '@/pages/nest/a'
import b from '@/pages/nest/b'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', name: 'Main', component: Main },
    { path: '/page', name: 'Page', component: Page },
    {
      path: '/nest', name: 'Nest', component: Nest, //meta: { loginAuth: true},
      // 有一个默认的子路由。当命名导航(:to="{name: 'Nest'")时，将不能正确指引到默认的子路由上
      children: [{ path: '', component: a }, { path: 'a', component: a }, { path: 'b', component: b }]
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(function (item) {
    return item.meta.loginAuth
  })) {
    if (sessionStorage.getItem("isLogin")) { // 判断当前的token是否存在
      next();
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else
    next()
})

export default router
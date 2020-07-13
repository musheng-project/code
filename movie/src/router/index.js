import Vue from 'vue'
import VueRouter from 'vue-router'
import {routes} from './routes'

//防止点击同样的路由时会出现错误
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

// 跳转路由让页面回到顶部
router.beforeEach((to, from, next) => {
  // 让页面回到顶部
  document.documentElement.scrollTop = 0
  // 调用 next()，一定要调用 next 方法，否则钩子就不会被销毁
 next()
})

export default router

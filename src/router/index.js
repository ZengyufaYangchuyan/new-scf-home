import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes.js'
import checkLogin from './filter/checkLogin'

Vue.use(VueRouter)

const router = new VueRouter({
  // mode: 'history',
  // base: 'home',
  routes
})

checkLogin(router)

export default router

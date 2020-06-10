import store from '../../store/index.js'

export default (router) => {
  router.beforeEach(async (to, from, next) => {
    if (to.meta && to.meta.nologin) {
      // 不需要登录,直接跳过
      return next()
    }

    const loginSession = store.getters.loginSession
    if (loginSession) {
      // 已经登录
      return next()
    }

    // 获取当前用户
    await store.dispatch('getLoginInfo')
    let currentUser = store.getters.currentUser
    if (currentUser) {
      // 已登录
      return next()
    } else {
      // 未登录
      return noLogin(router, to)
    }
  })
}

function noLogin (router, to) {
  // 未登录
  router.push('/login')
}

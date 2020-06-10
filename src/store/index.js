import Vue from 'vue'
import Vuex from 'vuex'

// apis
import * as accountApi from '../apis/accountApi.js'
import * as basicApi from '../apis/basicApi.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeTab: '/homePage', // 选中的页面路由
    sessionId: '',
    user: {},
    basicSetting: {}, // 基础设置
  },
  getters: {
    loginSession: state => {
      return state.sessionId
    },
    currentUser: state => {
      return state.user
    },
    basic: state => {
      return state.basicSetting
    }
  },
  mutations: {
    getActiveTab (state, newActive) {
      state.activeTab = newActive
    },
    // 设置当前登录用户
    setloginUser (state, obj) {
      state.sessionId = obj.sessionId
      state.user = obj.user
    },
    // 退出登录，清除用户信息
    logoutClearAcount (state) {
      state.sessionId = ''
      state.user = {}
    },
    // 设置基础设置
    setBasicSetting (state, obj) {
      state.basicSetting = obj
    }
  },
  actions: {
    changeActiveTab (context, newActive) {
      context.commit('getActiveTab', newActive)
    },
    // 获取登录信息
    async getLoginInfo (context) {
      let userInfo
      const {data} = await accountApi.getAccoutInfo().catch(e => e)
      if (!data) {
        userInfo = {
          sessionId: '',
          user: ''
        }
      } else {
        userInfo = {
          sessionId: data.sessionId,
          user: JSON.parse(data.user)
        }
      }
      context.commit('setloginUser', userInfo)
    },
    // 获取基础设置
    async getBasicSetting (context) {
      const {data} = await basicApi.getBasicSetting().catch(e => e)
      let basicSetting = {
        ...data
      }

      // 获取banner标识列表
      let bannerList = JSON.parse(data.banner)
      // 组装banner数据
      bannerList.forEach((item, index) => {
        item.display = index === 0
      })
      basicSetting.bannerListUrl = bannerList

      context.commit('setBasicSetting', basicSetting)
    },
    // 动态创建百度统计代码
    createBaiduCode (context) {
      let body = document.getElementsByTagName('body')[0]
      let script = document.createElement('script')
      script.type = 'text/javascript'
      script.text = `${context.getters.basic.baiduCode}`
      body.appendChild(script)
    },
    // SEO属性
    settingHeadSEO (context) {
      let oTitle = document.getElementsByTagName('title')[0]
      let metaKeywords = document.getElementById('seoKeywords')
      let metaDescript = document.getElementById('seoDescript')
      oTitle.text = `${context.getters.basic.seoTitle}`
      metaKeywords.content = `${context.getters.basic.seoKeys}`
      metaDescript.content = `${context.getters.basic.seoDecription}`
    }
  },
  modules: {
  }
})

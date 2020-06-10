import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element-ui/element.js'

// filter
import MD5 from './plugins/md5/index.js'

// components
import {Message, MessageBox} from 'element-ui'

// http
import request from './plugins/request'
import config from './config'

// dayjs
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
dayjs.locale('zh-cn')

request.defaults.baseURL = config.apiUrl

Vue.config.productionTip = false

Vue.prototype.$day = dayjs
Vue.prototype.$message = Message
Vue.prototype.$messageBox = MessageBox
Vue.prototype.$md5 = MD5

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

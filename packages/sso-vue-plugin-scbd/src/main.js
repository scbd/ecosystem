import Vue from 'vue'
import App from '../tests/App.vue'
import Auth from './index'
import vuex from 'vuex'

Vue.use(vuex)

const $store = new vuex.Store({  state: { init: {} } })

Vue.use(Auth, { $store, env: process.env.NODE_ENV })

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

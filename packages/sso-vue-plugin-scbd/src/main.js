//for dev only vue cli serve
import Vue from 'vue'
import App from '../public/App.vue'
import Auth from './index'


Vue.use(Auth, { forceEnv: process.env.NODE_ENV })

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

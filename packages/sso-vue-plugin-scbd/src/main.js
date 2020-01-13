import Vue from 'vue'
import App from '../tests/App.vue'
import Auth from './plugin'


Vue.use(Auth, { accountsUrl: 'https://accounts.cbd.int' } )//{ accountsUrl: 'https://accounts.cbd.int' }

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

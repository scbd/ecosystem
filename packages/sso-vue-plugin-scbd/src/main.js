import Vue from 'vue'
import App from './App.vue'
import Auth from './plugin'

Vue.use(Auth,{env:process.env.NODE_ENV})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

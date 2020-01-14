import Vue from 'vue'
import App from '../tests/App.vue'
import i18n from './modules/i18n'

Vue.config.productionTip = true
Vue.config.performance =true
Vue.use()
new Vue({
  i18n,
  render: h => h(App)
}).$mount('#app')

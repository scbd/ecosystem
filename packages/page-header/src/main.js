import Vue from 'vue'
import App from '../public/App.vue'
import i18n from '../tests/e2e/scaffolding/i18n'

Vue.config.productionTip = true
Vue.config.performance =true

new Vue({
  i18n,
  render: h => h(App)
}).$mount('#app')

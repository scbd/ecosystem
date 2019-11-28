import Vue from 'vue'
import App from '../tests/App.vue'
import i18n from '../tests/e2e/scaffolding/i18n'

Vue.config.productionTip = false

new Vue({
  i18n,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from '../tests/e2e/App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

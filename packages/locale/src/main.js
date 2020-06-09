//this file is only for testing ... and dev
//vue cli won't let us change entry file

import Vue from 'vue'
import App from '../tests/App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

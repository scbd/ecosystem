// this file is a hack for cypress. as it only looks in src main to run server

import Vue from 'vue'
import App from '../tests/dev/App.vue'
import VueI18n from 'vue-i18n'

Vue.config.productionTip = true
Vue.config.performance = true

Vue.use(VueI18n)
const i18n = new VueI18n({ locale: 'en', fallbackLocale: 'en', messages: { en: {} } })

new Vue({
  i18n,
  render: h => h(App)
}).$mount('#app')

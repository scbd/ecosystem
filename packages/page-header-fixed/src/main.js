// this file is a hack for cypress. as it only looks in src main to run server
import Vue     from 'vue'
import App     from '../public/App.vue'
import VueI18n from 'vue-i18n'
import Auth    from '@scbd/sso-vue-plugin-scbd'

Vue.config.productionTip = true
Vue.config.performance = true

Vue.use(VueI18n)
Vue.use(Auth, { forceEnv: 'development' })

const i18n = new VueI18n({ locale: 'en', fallbackLocale: 'en', messages: { en: {} } })

new Vue({
  i18n,
  render: h => h(App)
}).$mount('#app')

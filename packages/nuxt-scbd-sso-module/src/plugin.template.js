import Vue  from 'vue'
import Auth from '@scbd/sso-vue-plugin-scbd/src/plugin.js'

import './auth.js'

// eslint-disable-next-line rule
const options = <%= JSON.stringify(options, null, 2) %> // eslint-disable-line

export default ({ app, $http }) => {
  const $store  = app.store

  Vue.use(Auth, { accountsUrl: 'https://accounts.cbd.int', $store })
}

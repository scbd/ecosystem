import Vue  from 'vue'
import Auth from '@scbd/sso-vue-plugin-scbd'
import <%= `'./${options.middlewareNameSpacePath}'` %> // eslint-disable-line

const options = <%= JSON.stringify(options, null, 2) %> // eslint-disable-line

export default ({ app }) => {
  const $store  = app.store

  Vue.use(Auth, { ...options, ...{ $store } })
}

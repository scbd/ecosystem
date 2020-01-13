import Vue  from 'vue'
import Auth from '../plugin'

export default () => {
  Vue.use(Auth, { env: process.env.NODE_ENV })
}
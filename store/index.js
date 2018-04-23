import Vuex             from 'vuex'
import locale           from './modules/locale'

export default () => {
  return new Vuex.Store({
    strict: false,
    state: {},
    modules: {locale}
  })
}

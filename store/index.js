import Vuex             from 'vuex'

export default () => {
  return new Vuex.Store({
    strict: false,
    state: {},

    modules: {
        locale
    }
  })
}

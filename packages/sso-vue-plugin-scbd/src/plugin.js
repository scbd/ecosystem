import $http          from 'ky-universal'
import AuthIFrame     from './components/AuthIFrame'
import defaultOptions from './modules/defaultOptions'
import MeStore        from './me-store'
import MeVuex         from './me-vuex'
import AuthStore      from './auth-store'
import AuthVuex       from './auth-vuex'

export default { install }

function install (Vue, options = {}){ // eslint-disable-line

  const { env, ENV }   = options
  const opts  = { ...defaultOptions(Vue, env || ENV), ...options }

  const store   = initMeStore(Vue, opts)
  const auth    = initAuth(Vue, opts)

  const $me   = () => store
  const $auth = () => auth
  
  const globalVueMixin = {
    computed: { $me, $auth },
    methods : { loadUser, $logOut },
    mounted
  }

  function initMeStore(Vue, opts){
    const { $store } = opts
    let Me

    if($store) Me = MeVuex
    else Me = MeStore

    return new Me(Vue, opts)
  }
  function initAuth(Vue, opts){
    const { $store } = opts
    let Auth

    if($store) Auth = AuthVuex
    else Auth = AuthStore
    
    return new Auth(Vue, opts)
  }

  function $logOut(){
    this.$me.logOut()
    this.$auth.logOut()
    this.$forceUpdate()

    if(!Vue.$AuthIFrame) return
    const msg = JSON.stringify({ type: 'setAuthenticationToken', authenticationToken: null, authenticationEmail: null, expiration: null })

    Vue.$AuthIFrame.contentWindow.postMessage(msg, auth.accountsUrl)

    setTimeout(() => {
      this.$auth.dispatchUser(Vue.$AuthIFrame, this.$me)
      this.$root.$emit('$me', this.$me)
    }, 1500)
  }

  async function loadUser(){
    const   me                             = await getUser()
    const { FirstName, LastName, Country } = await getProfile(me.userID)
    
    const firstName = FirstName
    const lastName  = LastName
    const country   = Country
  
    Vue.nextTick(() => store.set({ ...me, firstName, lastName, country }))
    setTimeout(() => this.$forceUpdate(), 100)
    return store
  }
  
  function mounted(){
    if(!Vue.$AuthIFrame && this.$options.name!=='AuthIFrame' && this.$options.name){
      const data = () => ({ url: opts.accountsUrl })
      const AuthIFrameClass    = Vue.extend(AuthIFrame)
      const AuthIFrameInstance = new AuthIFrameClass({ methods: { receivePostMessage: this.$auth.receivePostMessage }, data })
    
      AuthIFrameInstance.$mount()
  
      document.getElementsByTagName('body')[0].appendChild(AuthIFrameInstance.$el)
      Vue.$AuthIFrame = AuthIFrameInstance.$el
  
      this.$auth.isAuthLoaded()
        .then(() => this.loadUser())
        .then(() => this.$auth.dispatchUser(AuthIFrameInstance.$el))
        .catch(() => {
          store.set()
          this.$auth.dispatchUser(AuthIFrameInstance.$el, store)
          this.$root.$emit('$me', this.$me)
        })
        .finally(() => {
          window.document.addEventListener('$requestMe', () => {
            this.$auth.dispatchUser(AuthIFrameInstance.$el, this.$me)
            this.$root.$emit('$me', this.$me)
          })
        })
    }
  }
  
  function getUser(){
    if (store.isSet)  return store
    if (!auth.token)  return store.set()
 
    return $http.get(`${opts.accountsUrl}/api/v2013/authentication/user`, auth.baseReqOpts).json()
  }
  
  function getProfile(id){
    return $http.get(`${opts.accountsUrl}/api/v2013/users/${id}`, auth.baseReqOpts).json()
  }

  Vue.mixin(globalVueMixin)
}
import $http          from 'ky-universal'
import AuthIFrame     from './components/AuthIFrame'
import defaultOptions from './modules/defaultOptions'
import MeStore        from './me-store'
import Auth           from './authentication'

export default { install }

function install (Vue, options = {}){ // eslint-disable-line

  const { env, ENV }   = options
  const opts  = { ...defaultOptions(env || ENV), ...options }

  const store   = new MeStore(Vue, opts)
  const auth    = new Auth(Vue, opts)

  const $me   = () => store
  const $auth = () => auth
  
  const globalVueMixin = {
    computed: { $me, $auth },
    mounted
  }

  async function loadUser(){
    
    const   me                             = await getUser()
    const { FirstName, LastName, Country } = await getProfile(me.userID)

    const firstName = FirstName
    const lastName  = LastName
    const country   = Country
  
    Vue.nextTick(() => store.set({ ...me, firstName, lastName, country }))

    return store
  }
  
  function mounted(){
    if(!Vue.$AuthIFrame && this.$options.name!=='AuthIFrame' && this.$options.name){
      const data = () => ({ url: opts.accountsUrl })
      const AuthIFrameClass    = Vue.extend(AuthIFrame)
      const AuthIFrameInstance = new AuthIFrameClass({ methods: { receivePostMessage }, data })
    
      AuthIFrameInstance.$mount()
  
      document.getElementsByTagName('body')[0].appendChild(AuthIFrameInstance.$el)
      Vue.$AuthIFrame = AuthIFrameInstance.$el
  
      this.$auth.isAuthLoaded()
        .then(() => loadUser())
        .then(() => dispatchUser(AuthIFrameInstance.$el))
        .catch(() => {
          store.set(anonymous())
          dispatchUser(AuthIFrameInstance.$el)
        })
        .finally(() => {
          this.$forceUpdate()
        })
    }
  }
  
  function dispatchUser(elm){
    const event = new Event('$me', { bubbles: true })
  
    event.$me = store
    elm.dispatchEvent(event)
  }

  function receivePostMessage(event){
    if(event.origin!=opts.accountsUrl) return null
    
    const { type, authenticationToken } = JSON.parse(event.data)

    if(type!=='authenticationToken') throw new Error('unsupported authentication message type')
  
    return auth.token = authenticationToken
  }
  
  function getUser(){
  
    if (store.userID) return store
    if (!auth.token)  return anonymous()
  
    return $http.get(`${opts.accountsUrl}/api/v2013/authentication/user`, auth.baseReqOpts).json()
  }
  
  function getProfile(id){
    return $http.get(`${opts.accountsUrl}/api/v2013/users/${id}`, auth.baseReqOpts).json()
  }

  Vue.mixin(globalVueMixin)
}

function anonymous(){
  return {
    userID         : 1,
    name           : 'anonymous',
    email          : 'anonymous@domain',
    government     : null,
    userGroups     : null,
    isAuthenticated: false,
    isOffline      : true,
    roles          : []
  }
}


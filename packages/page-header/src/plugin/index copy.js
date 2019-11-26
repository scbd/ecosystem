import Vue        from 'vue'
import axios      from 'axios'
import AuthIFrame from './components/AuthIFrame'

function isConstructor(f){
  try {
    Reflect.construct(String, [], f);
  }
  catch (e){
    return false;
  }
  return true;
}
const me    = {}
const token = ''
const vm    = isConstructor(Vue)? new Vue({ data: { me, token } }):new window.Vue({ data: { me, token } })
const $me   = () => vm.me
const ACCOUNTS_URL = process.env.VUE_APP_ACCOUNTS_URL

const globalVueMixin = {
  computed: { $me, $accountsBaseUrl, $baseReqOpts, $isAdmin },
  methods : { $isAuthLoaded, $isUserLoaded, $hasRole },
  mounted
}

export default { install }

function install (Vue){
  Vue.mixin(globalVueMixin)
}

function mounted(){
  if(!Vue.$AuthIFrame && this.$options.name!=='AuthIFrame' && this.$options.name){
    const data = () => ({ url: $accountsBaseUrl() })
    const AuthIFrameClass    = Vue.extend(AuthIFrame)
    const AuthIFrameInstance = new AuthIFrameClass({ methods: { receivePostMessage }, data })
  
    AuthIFrameInstance.$mount()

    document.getElementsByTagName('body')[0].appendChild(AuthIFrameInstance.$el)
    Vue.$AuthIFrame = AuthIFrameInstance.$el

    $isAuthLoaded()
      .then(loadUser)
      .then(() => dispatchUser(AuthIFrameInstance.$el))
      .catch(() => {
        vm.me = anonymous()
        dispatchUser(AuthIFrameInstance.$el)
      })
      .finally(() => {
        this.$forceUpdate()
      })
  }
}

function dispatchUser(elm){
  const event = new Event('$me', { bubbles: true })

  event.$me = vm.me
  elm.dispatchEvent(event)
}

function $isUserLoaded(){ return new Promise(loadingInterval) }
function $isAuthLoaded(){ return new Promise(loadingInterval) }

function loadingInterval(resolve, reject){
  const timeout = setTimeout(() => {
    clearInterval(timer)
    if(vm.me.userID) resolve(true)
    reject('Error loading SCBD auth vue plugin')
  }, 3000)
  const timer = setInterval(() => {
    if(!vm.token) return

    clearInterval(timer)
    clearTimeout(timeout)
    return resolve(vm.token)
  }, 100)
}

function receivePostMessage(event){
  if(event.origin!=$accountsBaseUrl()) return null

  const message = JSON.parse(event.data)

  if(message.type!=='authenticationToken')
    throw new Error('unsupported authentication message type')

  vm.token = message.authenticationToken
  return vm.token
}

async function loadUser(){
  const me      = await getUser()
  const profile = await getProfile(me.userID)

  me.firstName = profile.FirstName // eslint-disable-line
  me.lastName  = profile.LastName// eslint-disable-line
  me.country   = profile.Country// eslint-disable-line

  Vue.nextTick(() => {
    me.isAdmin = $isAdmin()
    me.isStaff = $isStaff()
    me.isGov   = $isGov()
    vm.me      = me
  })

  return vm.token
}

function $hasRole (role){
  if(!vm.me || !vm.me.roles) return false

  return vm.me.roles.includes(role)
}

function $isAdmin (){
  if(!vm.me || !vm.me.roles) return false

  return vm.me.roles.includes('Administrator') || vm.me.roles.includes('ActionAdmin')
}

function $isStaff (){
  if(!vm.me || !vm.me.userGroups) return false

  return vm.me.userGroups.includes('SCBD')
}

function $isGov (){
  if(!vm.me || !vm.me.government || !vm.me.roles) return false

  return vm.me.roles.includes('NFP-CBD') || vm.me.roles.includes('ChmNrNationalFocalPoint') || vm.me.roles.includes('ChmNrNationalAuthorizedUser')
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

function getUser(){
  const { me } = vm

  if(me && me.name) return me
  if(!vm.token)     return anonymous()

  return axios.get(`${$accountsBaseUrl()}/api/v2013/authentication/user`, $baseReqOpts())
    .then((r) => r.data)
}

function getProfile(id){
  return axios.get(`${$accountsBaseUrl()}/api/v2013/users/${id}`, $baseReqOpts())
    .then((r) => r.data)
}

function $accountsBaseUrl(){
  if(!ACCOUNTS_URL) throw new Error('ACCOUNTS_URL env var not set')
  return ACCOUNTS_URL
}

function $baseReqOpts(){
  if(!vm.token) return {}
  
  return { headers: { Authorization: `Ticket ${vm.token}` } }
}

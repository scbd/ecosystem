import { pascalCase } from 'change-case'
import { get$http   } from '@scbd/load-http'
import { name       } from '../package.json'

import   AuthIFrame             from './components/AuthIFrame.vue'
import   getDefaultOptions      from './default-options'
import { initMe, getMe        } from './me'
import { initAuth, getAuth    } from './auth'

const NAME        =  pascalCase(name.replace('@scbd/', ''))
const globalProps = {}

export default { install, NAME }

export const globalVueMixin = {
  computed: { $me: () => globalProps.me, $auth: () => globalProps.auth },
  methods : { $loadUser, $logOut },
  mounted
}

function install (Vue, options = {}){ // eslint-disable-line
  
  if (install.installed) return
  else install.installed = true

  const { forceEnv }   = options
  const opts           = { ...getDefaultOptions({}, forceEnv), ...options }

  initMe(Vue, opts)
  initAuth(Vue, opts)

  globalProps.opts = opts
  globalProps.Vue  = Vue

  getAuth()
    .then(async (auth) => globalProps.auth = auth)// eslint-disable-line
    .then(getMe)
    .then(async (me) => globalProps.me = me)// eslint-disable-line

  Vue.mixin(globalVueMixin)
}


async function mounted(){  // eslint-disable-line
  await getMe()// ensure defaults loaded user anon
  if(globalProps.$el) return
  globalProps.$el = getExistingIframe()

  if(!globalProps.$el && this.$options.name!=='AuthIFrame' && this.$options.name)
    createIframe()
  

  try{
    await this.$auth.isAuthLoaded()
    await this.$loadUser()
    await this.$auth.dispatchUser(globalProps.$el, this.$me)
    window.document.addEventListener('$requestMe', () => {
      this.$auth.dispatchUser(globalProps.$el, this.$me)
      this.$root.$emit('$me', this.$me)
    })
  }
  catch(e){
    globalProps.me.set()
    this.$auth.dispatchUser(globalProps.$el, globalProps.me)
    this.$root.$emit('$me', this.$me)
    console.error(e)
  }
}

function createIframe(){
  const AuthIFrameClass    = globalProps.Vue.extend(AuthIFrame)
  const AuthIFrameInstance = new AuthIFrameClass()
  
  AuthIFrameInstance.$mount()

  document.getElementsByTagName('body')[0].appendChild(AuthIFrameInstance.$el)
  globalProps.$el = AuthIFrameInstance.$el
}

function getExistingIframe(){
  const iFrames = window.document.getElementsByTagName('iframe')

  for (const anIframe of iFrames){
    const { origin } = new URL(anIframe.getAttribute('src'))

    if(globalProps.auth.accountsBaseUrl === origin)
      return useExistingIframe(anIframe)
  }
}

function useExistingIframe($el){
  window.addEventListener('message', globalProps.auth.receivePostMessage)

  const { contentWindow } = $el
  const   type            = 'getAuthenticationToken'
  const   msg             = JSON.stringify({ type })

  contentWindow.postMessage(msg, globalProps.auth.accountsBaseUrl)

  return $el
}

async function $loadUser(){
  const   me                             = await getUser()
  const { FirstName, LastName, Country } = await getProfile(me.userID)
  
  const firstName = FirstName
  const lastName  = LastName
  const country   = Country

  globalProps.Vue.nextTick(() => globalProps.me.set({ ...me, firstName, lastName, country }))
  setTimeout(() => this.$forceUpdate(), 100) // still needed?
  return globalProps.me
}

function $logOut(){
  globalProps.me.logOut()
  globalProps.auth.logOut()

  if(!globalProps.Vue.$AuthIFrame) return
  
  const msg = JSON.stringify({ type: 'setAuthenticationToken', authenticationToken: null, authenticationEmail: null, expiration: null })

  globalProps.Vue.$AuthIFrame.contentWindow.postMessage(msg, globalProps.auth.accountsUrl)

  setTimeout(() => {
    globalProps.auth.dispatchUser(globalProps.Vue.$AuthIFrame, this.$me)
    this.$root.$emit('$me', this.$me)
  }, 1500)
}

async function getProfile(id){
  const $http = await get$http()

  return $http.get(`${globalProps.opts.accountsUrl}/api/v2013/users/${id}`, globalProps.auth.baseReqOpts).json()
}

async function getUser(){
  if (globalProps.me.isSet)  return globalProps.me
  if (!globalProps.auth.token)  return globalProps.me.set()

  const $http = await get$http()

  return $http.get(`${globalProps.opts.accountsUrl}/api/v2013/authentication/user`, globalProps.auth.baseReqOpts).json()
}
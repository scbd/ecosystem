/* eslint-disable */
import   Vue          from 'vue'
import { pascalCase } from 'change-case'
import { get$http   } from '@scbd/load-http'
import { name       } from '../package.json'

import   AuthIFrame                                  from './components/AuthIFrame.vue'
import   getDefaultOptions                           from './default-options'
import { initMe           , getMe }                  from './me'
import { initAuth         , getAuth, isTokenLoaded } from './auth'

const NAME        = pascalCase(name.replace('@scbd/', ''))
const globalProps = new Vue({ 
                              data: { me: {}, auth: {} },
                              methods : { $getUser, $logOut, $initSsoScbd }
                            })

const globalVueMixin = {
  data: function (){ return { me: globalProps.me, auth: globalProps.auth, el: undefined } },
  methods : { $getUser, $logOut, $initSsoScbd },
  mounted
}

export const ssoScbd = globalProps
export const plugin  = { install, NAME }

export default plugin

function install (Vue, options = {}){ // eslint-disable-line
  
  if (install.installed) return
  else install.installed = true

  const { forceEnv }   = options
  const opts           = { ...getDefaultOptions({}, forceEnv), ...options }

  globalProps.me   = initMe(Vue, opts)
  globalProps.auth = initAuth(Vue, opts)

  Vue.mixin(globalVueMixin)

  globalProps.opts = opts
  globalProps.Vue  = Vue

  getAuth()
    .then(async (auth) => { globalProps.auth = auth; globalVueMixin.auth = auth; })// eslint-disable-line
    .then(getMe)
    .then(async (me) => { globalProps.me = me; globalVueMixin.me = me; })// eslint-disable-line
}

async function mounted(){  // eslint-disable-line
  //await getMe()// ensure defaults loaded user anon
  if(globalProps.el) return
  globalProps.el = getExistingIframe()

  if(!globalProps.el && this.$options.name!=='AuthIFrame' && this.$options.name)
    createIframe()
  
  try{
    await this.auth.isAuthLoaded()
    await this.auth.dispatchUser(globalProps.el, await this.$getUser())

    window.document.addEventListener('$requestMe', async () => {
      const user = await this.$getUser()

      this.auth.dispatchUser(globalProps.el,  user)
      this.$root.$emit('$me',  user)
    })
  }
  catch(e){
    globalProps.me.set()
    this.auth.dispatchUser(globalProps.el, globalProps.me)
    this.$root.$emit('$me', globalProps.me)
    console.error(e)
  }
}

function createIframe(){
  const AuthIFrameClass    = globalProps.Vue.extend(AuthIFrame)
  const AuthIFrameInstance = new AuthIFrameClass()
  
  AuthIFrameInstance.$mount()

  document.getElementsByTagName('body')[0].appendChild(AuthIFrameInstance.$el)
  globalProps.el = AuthIFrameInstance.$el
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

async function $getUser(){
  await isTokenLoaded()

  const   me                             = await getUser()
  const { FirstName, LastName, Country } = await getProfile(me.userID)
  
  const firstName = FirstName
  const lastName  = LastName
  const country   = Country

  globalProps.Vue.nextTick(() => globalProps.me.set({ ...me, firstName, lastName, country }))

  return globalProps.me
}

function $logOut(){
  globalProps.me.logOut()
  globalProps.auth.logOut()

  if(!globalProps.el) return
  
  const msg = JSON.stringify({ type: 'setAuthenticationToken', authenticationToken: null, authenticationEmail: null, expiration: null })

  globalProps.el.contentWindow.postMessage(msg, globalProps.auth.accountsUrl)

  setTimeout(() => {
    globalProps.auth.dispatchUser(globalProps.el, this.me)
    this.$root.$emit('$me', this.me)
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

async function $initSsoScbd(){
  const token = await isTokenLoaded ()

  if(!token) return globalProps.me

  return $getUser()
}
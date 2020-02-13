import AuthStore  from './auth-store'
import AuthVuexModule from './auth-vuex-module'

let store
let options
let elm

export default class extends AuthStore{
  constructor(vue, opts){
    const { $store } =  opts

    super(vue, opts)

    $store.registerModule('auth', AuthVuexModule, { preserveState: false })
    options = opts
    store   = $store
  }

  logOut(){ store.commit('auth/logOut') }

  set token(token){ store.commit('auth/save', { token }) }

  get token(){ return store.state.auth.token }
  
  get accountsBaseUrl(){ return this.accountsUrl }

  get baseReqOpts(){
    if(!store.state.auth.token) return {}
    
    return { headers: { Authorization: `Ticket ${store.state.auth.token}` } }
  }

  receivePostMessage(event){
    if(!isAccountsOrigin(event)) return null
    
    const { type, authenticationToken } = JSON.parse(event.data)

    if(type!=='authenticationToken') throw new Error('unsupported authentication message type')
    this.token = authenticationToken
    store.commit('auth/save', { token: authenticationToken })
    return authenticationToken
  }
  
  dispatchUser(element){
    if(!elm) elm = element

    const event = new Event('$me', { bubbles: true })

    event.$me   = store.state.me
    event.$auth = store.state.auth
    elm.dispatchEvent(event)

    this.onRequestMeEvent(elm)
  }

  isAuthLoaded(){  return new Promise(loadingInterval.bind(this)) }

  onRequestMeEvent(element){
    if(!elm) elm = element
    
    window.document.addEventListener('$requestMe', () => this.dispatchUser(elm))
  }
}

function isAccountsOrigin(event){ return event.origin===options.accountsUrl }

function loadingInterval(resolve, reject){
  const timeout = setTimeout(() => {
    clearInterval(timer)
    reject('Error loading SCBD SSO auth vue plugin')
  }, 1500)

  const timer = setInterval(() => {
    if(!store.state.auth.token) return

    clearInterval(timer)
    clearTimeout(timeout)
    return resolve(store.state.auth.token)
  }, 100)
}

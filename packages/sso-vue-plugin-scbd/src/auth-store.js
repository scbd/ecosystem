let store
let options
let elm

export default class {
  constructor(vue, opts){
    const token = ''

    options = opts
    store   = new vue({ data: { token } })
  }

  logOut(){ store.token = '' }

  set token(t){ store.token = t }

  get token(){ return store.token }
  
  get accountsBaseUrl(){ return this.accountsUrl }

  get accountsUrl(){
    const { accountsUrl } = options
  
    if(!accountsUrl) throw new Error('options.accountsUrl var not set')
  
    return accountsUrl
  }

  get baseReqOpts(){
    if(!store.token) return {}
    
    return { headers: { Authorization: `Ticket ${store.token}` } }
  }

  isAuthLoaded(){  return new Promise(loadingInterval.bind(this)) }

  receivePostMessage(event){
    if(!isAccountsOrigin(event)) return null
    
    const { type, authenticationToken } = JSON.parse(event.data)

    if(type!=='authenticationToken') throw new Error('unsupported authentication message type')
  
    return store.token = authenticationToken
  }
  
  dispatchUser(element, meStore){
    if(!elm) elm = element

    const event = new Event('$me', { bubbles: true })

  
    event.$me   = meStore
    event.$auth = store
    elm.dispatchEvent(event)
    this.onRequestMeEvent(elm)
  }


  onRequestMeEvent(element){
    if(!elm) elm = element
  
    window.document.addEventListener('$requestMe', () => this.dispatchUser(elm))
  }
}

function loadingInterval(resolve, reject){
  const timeout = setTimeout(() => {
    clearInterval(timer)
    // if(store.me.userID) resolve(store.token)
    reject('Error loading SCBD SSO auth vue plugin')
  }, 5000)

  const timer = setInterval(() => {
    if(!store.token) return

    clearInterval(timer)
    clearTimeout(timeout)
    return resolve(store.token)
  }, 100)
}

function isAccountsOrigin(event){ return event.origin===options.accountsUrl }

let store
let options

export default class {
  constructor(vue, opts){
    const token = ''

    options = opts
    store   = new vue({ data: { token } })
  }

  set (t){ store.token = t }

  get token(){ return store.token }
  
  get accountsBaseUrl(){ return this.accountsUrl }

  get accountsUrl(){
    const { accountsUrl } = options
  
    if(!accountsUrl) throw new Error('options.accountsUrl var not set')
  
    return accountsUrl
  }

  get baseReqOpts(){
    if(!this.store.token) return {}
    
    return { headers: { Authorization: `Ticket ${store.token}` } }
  }

  isAuthLoaded(){  return new Promise(loadingInterval.bind(this)) }

  receivePostMessage(event){
    if(!isAccountsOrigin(event)) return null
    
    const { type, authenticationToken } = JSON.parse(event.data)

    if(type!=='authenticationToken') throw new Error('unsupported authentication message type')
  
    return store.token = authenticationToken
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
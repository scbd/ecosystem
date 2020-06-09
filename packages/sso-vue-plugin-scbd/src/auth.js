const globalProps = {}

export const initAuth = (Vue, opts) => {
  const token    = ''
  const instance = {}

  globalProps.opts           = opts
  globalProps.store          = new Vue({ data: { token, instance } })
  globalProps.store.instance = new AuthStore()
}

export const getAuth = () => new Promise(loadingIntervalInstance)


class AuthStore{
  logOut(){ globalProps.store.token = '' }

  set token(t){ globalProps.store.token = t }

  get token(){ return globalProps.store.token }
  
  get accountsBaseUrl(){ return this.accountsUrl }

  get accountsUrl(){
    const { accountsUrl } = globalProps.opts
  
    if(!accountsUrl) throw new Error('options.accountsUrl var not set')
  
    return accountsUrl
  }

  get baseReqOpts(){
    if(!globalProps.store.token) return {}
    
    return { headers: this.formatedHeader }
  }

  get formatedHeader(){
    if(!globalProps.store.token) return {}
    
    return  { Authorization: `Ticket ${globalProps.store.token}` }
  }

  isAuthLoaded(){  return new Promise(loadingInterval.bind(this)) }

  receivePostMessage(event){
    if(!isAccountsOrigin(event)) return null

    const { type, authenticationToken } = JSON.parse(event.data)

    if(type!=='authenticationToken') throw new Error('unsupported authentication message type')

    return globalProps.store.token = authenticationToken
  }
  
  dispatchUser(element, meStore){
    if(!globalProps.elm) globalProps.elm = element

    const event = new Event('$me', { bubbles: true })

    event.$me   = meStore
    event.$auth = globalProps.store
    globalProps.elm.dispatchEvent(event)
    this.onRequestMeEvent(globalProps.elm)
  }

  onRequestMeEvent(element){
    if (this.onRequestMeEvent.installed) return
    else this.onRequestMeEvent.installed = true

    if(!globalProps.elm) globalProps.elm = element
  
    window.document.addEventListener('$requestMe', () => this.dispatchUser(globalProps.elm))
  }

  isAccountsUrl(url){
    return globalProps.opts.allAccountUrls.includes(url)
  }
}

function loadingInterval(resolve){
  const timeout = setTimeout(() => {
    clearInterval(timer)
    resolve(globalProps.store.token)
  }, 5000)

  const timer = setInterval(() => {
    if(!globalProps.store.token) return

    clearInterval(timer)
    clearTimeout(timeout)
    return resolve(globalProps.store.token)
  }, 100)
}

function loadingIntervalInstance(resolve, reject){
  let timer = undefined
  const timeout = setTimeout(() => {
    clearInterval(timer)
    reject('Error loading $auth instance')
  }, 5000)

  timer = setInterval(() => {
    if(!globalProps.store.instance) return

    clearInterval(timer)
    clearTimeout(timeout)
    return resolve(globalProps.store.instance)
  }, 100)
}

function isAccountsOrigin({ origin } = {}){ return origin === globalProps.opts.accountsUrl }

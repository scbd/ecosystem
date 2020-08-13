const globalProps = {}

export const initMe = (Vue, opts) => {
  const me            = {}
  const instance      = {}

  globalProps.opts           = opts
  globalProps.store          = new Vue({ data: { me, instance } })
  globalProps.store.instance = new MeStore()
  globalProps.store.instance.set()

  return globalProps.store.instance
}

export const getMe = () =>  new Promise(loadingInterval)

function loadingInterval(resolve, reject){
  let timer = undefined
  const timeout = setTimeout(() => {
    clearInterval(timer)
    reject('Error loading $me instance')
  }, 5000)

  timer = setInterval(() => {
    if(!globalProps.store.instance) return

    clearInterval(timer)
    clearTimeout(timeout)

    return resolve(globalProps.store.instance)
  }, 100)
}
//wrapper for store, getters and setter logic
class MeStore{
  get userID(){ return globalProps.store.me.userID }
  get userId(){ return globalProps.store.me.userID }
  get name(){ return globalProps.store.me.name }
  get email(){ return globalProps.store.me.email }
  get government(){ return globalProps.store.me.government }
  get institution(){ return globalProps.store.me.institution }
  get userGroups(){ return globalProps.store.me.userGroups }
  get isAuthenticated(){ return globalProps.store.me.isAuthenticated }
  get roles(){ return globalProps.store.me.roles }
  get isEmailVerified(){ return globalProps.store.me.isEmailVerified }
  get isSet(){ return globalProps.store.me.userID && globalProps.store.me.userID !== 1 }
  get isAdmin (){
    const { roles } = this

    if(!roles || !globalProps.opts) return false
    
    const adminRoles = globalProps.opts._admins.concat(globalProps.opts.admins)

    for (const role of adminRoles)
      if(roles.includes(role))
        return true
    
    return false
  }
  get isStaff (){
    const { userGroups } = this

    if(!userGroups) return false
  
    return userGroups.includes('SCBD')
  }
  get isGov (){
    const { roles, government } = this

    if(!government || !roles || !globalProps.opts) return false

    const govRoles = globalProps.opts._govRoles.concat(globalProps.opts.govRoles)

    for (const role of govRoles)
      if(this.roles.includes(role))
        return true
    
    return false
  }

  hasRole (role){
    const { roles } = this || (globalProps.opts || {}).store

    if(!roles) return false
  
    return roles.includes(role)
  }
  logOut(){
    globalProps.store.me = this.anonymous()
  }
  set (data){
    globalProps.store.me = data || this.anonymous()
    this.makeGettersEnumerable(this)

    return this
  }
  makeGettersEnumerable(instance){
    const prototype                    = Object.getPrototypeOf(instance)
    const prototypePropertyDescriptors = Object.getOwnPropertyDescriptors(prototype)

    for(const [ property, descriptor ] of Object.entries(prototypePropertyDescriptors)){
      const isNonStaticGetter = (typeof descriptor.get === 'function')
  
      if(!isNonStaticGetter) continue
  
      descriptor.enumerable = true
      Object.defineProperty(instance, property, descriptor)
    }
  }
  anonymous(){
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
}



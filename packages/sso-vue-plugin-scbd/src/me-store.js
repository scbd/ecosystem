let store
let options

export default class MeStore{
  constructor(vue, opts){
    const me    = {}

    options = opts
    store   = new vue({ data: { me } })
  }

  get userID(){ return store.me.userID }
  get name(){ return store.me.name }
  get email(){ return store.me.email }
  get government(){ return store.me.government }
  get institution(){ return store.me.institution }
  get userGroups(){ return store.me.userGroups }
  get isAuthenticated(){ return store.me.isAuthenticated }
  get roles(){ return store.me.roles }
  get isEmailVerified(){ return store.me.isEmailVerified }
  get isSet(){ return store.me.userID && store.me.userID !== 1 }

  set (data){
    store.me = data || this.anonymous()
    this.makeGettersEnumerable(this)

    return this
  }

  logOut(){
    store.me = this.anonymous()
  }

  get isAdmin (){
    const { roles } = this

    if(!roles || !options) return false
    
    const adminRoles = options._admins.concat(options.admins)

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

    if(!government || !roles || !options) return false

    const govRoles = options._govRoles.concat(options.govRoles)

    for (const role of govRoles)
      if(this.roles.includes(role))
        return true
    
    return false
  }

  hasRole (role){
    const { roles } = this

    if(!roles) return false
  
    return roles.includes(role)
  }

  makeGettersEnumerable(instance){
    const prototype                    = Object.getPrototypeOf(instance)
    const prototypePropertyDescriptors = Object.getOwnPropertyDescriptors(prototype)

    for(const [ property, descriptor ] of Object.entries(prototypePropertyDescriptors)){
      const isNonStaticGetter = (typeof descriptor.get === 'function')
  
      if(!isNonStaticGetter) continue
  
      descriptor.enumerable = true;
      Object.defineProperty(instance, property, descriptor);
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



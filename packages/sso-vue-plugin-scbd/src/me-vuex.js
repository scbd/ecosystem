// import { mapState, mapGetters } from 'vuex'
import MeVuexModule from './me-vuex-module'
import MeStore      from './me-store'

let store

export default class MeVuex extends MeStore{
  constructor(vue, opts){
    const { $store } =  opts

    super(vue, opts)
    $store.registerModule('me', MeVuexModule, { preserveState: false })

    store = $store
  }

  get userID(){ return store.state.me.userID }
  get name(){ return store.state.me.name }
  get email(){ return store.state.me.email }
  get government(){ return store.state.me.government }
  get institution(){ return store.state.me.institution }
  get userGroups(){ return store.state.me.userGroups }
  get isAuthenticated(){ return store.state.me.isAuthenticated }
  get roles(){ return store.state.me.roles }
  get isEmailVerified(){ return store.state.me.isEmailVerified }
  get isSet(){ return store.state.me.userID && store.state.me.userID !== 1 }
  get isVuex(){ return true }

  set (data){
    store.commit('me/save',  data || this.anonymous())
    this.makeGettersEnumerable(this)
    
    return this
  }
  
  logOut (){
    store.commit('me/logOut')
    store.commit('me/save', this.anonymous())
    return this
  }
}
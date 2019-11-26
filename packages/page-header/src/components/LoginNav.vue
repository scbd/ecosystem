<template>
  <ul class="navbar-nav">
    <li v-if="!isAuthLoaded" class="nav-item">
      <a id="accountsLink-SNE" v-if="!isAuthLoaded" class="nav-link" :href="`${$accountsBaseUrl}/signin?returnUrl=${returnUrl}`">
        {{$t('Login')}}
        <span class="lock-icon"></span>
      </a>
    </li>

    <li v-if="isAuthLoaded" @mouseover="open()" @mouseleave="close()" @click="toggle()"  class="topmenu nav-item dropdown">
      <a href="#" :title="me.name" class="nav-link dropdown-toggle"  role="button" >
        {{me.name}}
      </a>

      <transition name="slide-fade">
        <div v-if="show" class="dropdown-menu show">
          <div class="dropdown-item-container">
            <a :href="`${$accountsBaseUrl}/profile?returnUrl=${returnUrl}`" :title="$t('Profile')" target="_blank" rel="noopener noreferrer" class="dropdown-item">
              <Icon name="profile"/>
              <span class="dropdown-item-label">{{$t('Profile')}}</span>
            </a>
            <a  :href="`${$accountsBaseUrl}/profile?returnUrl=${returnUrl}`" :title="$t('Password')" target="_blank" rel="noopener noreferrer" class="dropdown-item">
              <Icon name="password"/>
              <span class="dropdown-item-label">{{$t('Password')}}</span>
            </a>
            <a  href="https://www.cbd.int/user/signout" :title="$t('Sign Out')" class="dropdown-item">
              <Icon name="sign-out"/>
              <span class="dropdown-item-label">{{$t('Sign Out')}}</span>
            </a>
          </div>
        </div>
      </transition>
    </li>
  </ul>
</template>
<script>
import Vue  from 'vue'
import Icon from '@components/Icon'
import Auth from '@src/plugin'

if(isConstructor(Vue)) Vue.use(Auth, { env: process.env.NODE_ENV })
else window.Vue.use(Auth, { env: process.env.NODE_ENV })

export default {
  name      : 'LoginNav',
  components: { Icon },
  methods   : { loadMe, toggle, open, close, set },
  computed  : { isAuthLoaded },
  data,
  mounted
}

function isAuthLoaded(){
  const { me } = this

  console.log('me', me) // eslint-disable-line
  if(!me || !me.name) return false
  if(me.name === 'anonymous') return false

  return true
}
function isConstructor(f){
  try {
    Reflect.construct(String, [], f);
  }
  catch (e){
    return false;
  }
  return true;
}
function data(){ return { returnUrl: '', me: {}, show: false, isMobile: false } }

function mounted(){
  this.isMobile = window.matchMedia('(max-width: 768px)').matches
  window.document.addEventListener('$me', this.loadMe)
  this.returnUrl = window? window.location.href : ''
}

function loadMe(evt){
  setTimeout(() => {
    this.me = evt.$me
    this.$forceUpdate()
  }, 100)
}

function toggle(){
  this.show = !this.show
  this.$forceUpdate()
}

function open (index){ this.set(index, true) }

function close (index){ this.set(index, false) }

function set (index, state){
  if(this.isMobile) return
  this.show = state
  this.$forceUpdate()
}
</script>

<style scoped>
  .nav-item{ text-transform: capitalize; }
  .dropdown-item svg { margin-right:1em; }
</style>
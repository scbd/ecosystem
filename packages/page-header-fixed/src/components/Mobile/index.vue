<i18n src="../../locales/index.json"></i18n>
<template >
  <div class="navbar-wrapper mobile-only">
    <nav class="navbar sub-nav">
        <a class="navbar-brand" href="/">
          <img src="https://attachments.cbd.int/CBD_brand_green.png" :alt="$t('Convention on Biological Diversity')">
        </a>
        
        <div class="text-center sub-nav-title ">
          <img :srcset="`https://attachments.cbd.int/${$i18n.locale}/brand-text.png`" :alt="$t('Convention on Biological Diversity')">
        </div>

        <button @click="toggle()" class="navbar-toggler collapsed" type="button">
          <img v-if="!show" src= "http://attachments.cbd.int/nav_icon.png"/>
          <Icon v-if="show" name="close" />
        </button>

        <transition name="mobile">
          <Nav  :show="show" v-bind="$props" />
        </transition>

    </nav>
  </div>
</template>

<script>
import Nav  from './Nav.vue'
import Icon  from '../Icon.vue'
export default {
  name      : 'MobileHeaderSCBD',
  components: { Nav, Icon },
  props     : [ 'siteNavElms', 'opts' ],
  methods   : { toggle },
  data
}

function data(){ return { show: false } }

function toggle(){
  this.show = !this.show
  this.$forceUpdate()
}
</script>

<style scoped>
  .menu-container      { margin-left:-60% !important; }
  .mobile-enter-active { transition:  all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0); }
  .mobile-leave-active { transition: all .6s ease; }
  .mobile-enter, .mobile-leave-to { transform: translateX(630px); opacity: 0; }
</style>
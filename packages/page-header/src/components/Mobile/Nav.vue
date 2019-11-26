<template functional>
  <div v-show="props.show" class="mobile-nav-wrapper ml-auto mobile-menu">
    <div class="mobile-nav-wrapper ml-auto mobile-menu">
      <div  class="navbar-collapse">

        <component
            :is="injections.components.MainNav"
            :menuItems="props.siteNavigationElements[2].hasPart"/>

        <div class="mobile-top-menu">
          <hr>
          <component
              :is="injections.components.TopMenuDropDown"
              :menuItems="props.siteNavigationElements.slice(0, 2)"/>
          <hr>

          <component :is="injections.components.LoginNav" />

          <component :is="injections.components.SearchNav"/>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
import TopMenuDropDown from '@components/TopMenuDropDown'
import LoginNav        from '@components/LoginNav'
import SearchNav       from '@components/SearchNav'
import MainNav         from '@components/MainNav'

const inject = { components: { default: { TopMenuDropDown, LoginNav, SearchNav, MainNav } } }

export default {
  name : 'MobileNav',
  props: [ 'siteNavigationElements', 'show' ],
  inject
}
</script>
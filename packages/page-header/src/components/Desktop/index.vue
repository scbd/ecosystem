<template functional>
    <div class="navbar-wrapper desktop-only">
      <component  :is="injections.components.FixedNav"
                  :topMenus="props.siteNavigationElements.slice(0, 2)"/>

      <nav id="pageMainNav" class="navbar navbar-expand-lg sub-nav">
        <div class="limited-width-content">
          <component  :is="injections.components.Logo"/>
          <component  :is="injections.components.MainNav"
                      :menuItems="props.siteNavigationElements[2].hasPart"/>
        </div>
      </nav>
    </div>
</template>

<script>
import FixedNav     from './FixedNav'
import Logo         from './Logo'
import MainNav      from '@components/MainNav'

const inject = { components: { default: { FixedNav, MainNav, Logo } } }

export default {
  props: [ 'siteNavigationElements' ],
  inject
}
</script>
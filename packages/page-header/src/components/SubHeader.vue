<template functional>
    <div class="desktop-only">
      <nav id="pageMainNav" class="navbar navbar-expand-lg sub-nav">
        <div class="limited-width-content">
          <component  :is="injections.components.Logo"/>
          <component  :is="injections.components.MainNav" v-bind="props"/>
        </div>
      </nav>
    </div>
</template>

<script>
import Logo    from './Logo.vue'
import MainNav from './MainNav.vue'

const inject = { components: { default: { MainNav, Logo } } }

export default {
  name : 'SubHeader',
  props: [ 'siteNavElms', 'opts' ],
  inject
}
</script>
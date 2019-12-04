<template functional>
  <nav :id="props.menu['@id']" :class="props.classes">
    <h1 class="pf-hl"> {{props.menu.name}} </h1>
    <hr class="pf-hr">
    <nav :class="{['flex-two-column']:props.flexCol}">
      <a :id="aMenu['@id']" v-for="(aMenu,index) in props.menu.hasPart" :key="index"  :href="aMenu.url" :title="aMenu.name" class="pf-a">
        <span v-if="!aMenu.image" class="pf-as"> {{aMenu.name}} </span>
        <figure v-if="aMenu.image" class="pf-f">
          <img :srcset="aMenu.image" :alt="aMenu.name" width="100%">
        </figure>
      </a>
    </nav>
  </nav>
</template>

<script>
export default {
  name : 'PageFooterNav',
  props: [ 'menu', 'classes', 'flexCol' ]
}
</script>
<style scoped>
.pf-hl{  text-transform: uppercase; font-size: 2em; margin: 0 0 0 0; color:#cdcdcd; }
.pf-hr{ border-bottom: 1px solid#cdcdcd; width: 100%; margin: 5px 0; }
.pf-a{ color:#cdcdcd; display: block; font-size: 1em; }
.pf-as{ color:#cdcdcd; font-size: 1em; }
.pf-f { margin-top: 1em; }
@media (max-width: 568px){
  .pf-hl{ margin-top: 1em;}
}
</style>


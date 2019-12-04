<template>
  <div id="app">

    <HeaderSCBD />

  </div>
</template>

<script>
import HeaderSCBD  from '@src/data-providers/Drupal.vue'


export default {
  name      : 'app',
  components: { HeaderSCBD }
}

</script>
<style>
  @import "https://fonts.googleapis.com/css?family=BenchNine:300,400,600,900";
  @import "https://prod.drupal.www.infra.cbd.int/themes/custom/bootstrap_sass/css/style.css";
  @import "https://s3.amazonaws.com/phoenix.www.cbd.int/themes/custom/bootstrap_sass/css/style.css";

  .slide-fade-enter-active { transition:  all .2s ease; }
  .slide-fade-leave-active { transition: all .3s ease; }
  .slide-fade-enter, .slide-fade-leave-to { transform: translateY(-20px); opacity  : 0; }
</style>
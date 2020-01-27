<template>
  <div id="app">
    <PageFooter />
  </div>
</template>

<script>

import PageFooter from '../src/data-providers/Drupal'

export default {
  name      : 'app',
  components: { PageFooter }
}

</script>
<style>
  @import "https://fonts.googleapis.com/css?family=BenchNine:300,400,600,900";
  @import "https://prod.drupal.www.infra.cbd.int/themes/custom/bootstrap_sass/css/style.css";
</style>
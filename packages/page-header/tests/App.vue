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
<template>
  <div id="app">
    <Map :options="options"/>
  </div>
</template>

<script>
import Map               from './index.vue'
import getDefaultOptions from '../src/default-options'

export default {
  name      : 'app',
  components: { Map },
  computed  : { options }
}

function options(){
  return { ...getDefaultOptions() }
}
</script>

<style>

</style>

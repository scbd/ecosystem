<template>
  <div id="app">
    <h1>am4-map-lib</h1>
    <h2>Exports the following:</h2>
    <h6>{{exports}}</h6>
  </div>
</template>

<script>
import * as Am4MapLib from '../src/index'

export default {
  name    : 'app',
  computed: {
    exports: () => JSON.stringify(Object.keys(Am4MapLib))
  }
}

</script>


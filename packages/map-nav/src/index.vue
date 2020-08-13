<template>
  <div id="scbd-map-nav" style="position:relative; width:100%">
    <div class="cont" ref='map'></div>
  </div>
</template>

<script>

import { MapBuilder     } from './map-builder'
import { Mixin } from '@scbd/am4-map-base'

export default {
  name   : 'ScbdMapNav',
  mixins : [ Mixin ],
  methods: { constructMap },
  mounted
}


function mounted (){ setTimeout(() => this.constructMap(), 100) }// not sure why but map does not mount without a bit of a time out }


async function constructMap(){
  this.opts  = await this.whenOptions()

  this.map = new MapBuilder(this.$refs.map, this.opts)
}

</script>

<style scoped>
  .cont { width: 100%; height: 450px; }
</style>
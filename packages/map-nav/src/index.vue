<template>
  <div id="scbd-map-nav" style="position:relative; width:100%">
    <div class="cont" ref='map'></div>
  </div>
</template>

<script>

import { MapBuilder     } from './map-builder'
import { getDefaultOptions } from '@scbd/am4-map-base'

export default {
  name    : 'ScbdMapNav',
  props   : { options: { type: Object, required: true } },
  methods : { constructMap },
  computed: { opts },
  mounted,
  data,
  beforeDestroy,
  errorCaptured
}

function data (){ return { map: {} } }
function opts(){ return { ...getDefaultOptions(), ...this.options } }
function beforeDestroy(){ dispose(this.map) }
function mounted (){ setTimeout(() => this.constructMap(), 100) }// not sure why but map does not mount without a bit of a time out }
function dispose(map){ if(map && map.dispose) map.dispose() }

function constructMap(){
  this.map = new MapBuilder(this.$refs.map, this.opts)
}

function errorCaptured(err, vm){
  dispose(vm.$data.map)
  console.error(err)
}
</script>

<style scoped>
  .cont { width: 100%; height: 450px; }
</style>
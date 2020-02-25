<template>
  <div  style="position:relative; width:100%">
    <div class="cont" ref='map'></div>
  </div>
</template>

<script>

import { MapBuilder     } from './builder'
import { DefaultOptions } from './default-options'

export default {
  name    : 'AmMap',
  props   : { options: { type: Object, required: true } },
  methods : { constructMap },
  computed: { opts },
  mounted,
  data,
  beforeDestroy,
  errorCaptured
}

function data (){ return { map: {} } }
function opts(){ return DefaultOptions.get(this.options || {}) }
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
  .cont{ width: 100%; height: 450px; }
</style>
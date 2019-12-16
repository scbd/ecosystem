<template>
  <div :style="{ height:`${options.height}px`, width:`${options.width}px` }" style="position:relative;">
    <div class="cont" ref='map'></div>
  </div>
</template>
<script>
import { createFromConfig, useTheme } from '@amcharts/amcharts4/core'
import { MapChart               }           from '@amcharts/amcharts4/maps'
import { MapBuilder             }           from '@modules/map-builder'
import   am4themes_animated                 from '@amcharts/amcharts4/themes/animated'// eslint-disable-line
import { geoDataPoliticalUpdate }           from '@modules/political-mapping'
import geodata                              from '@amcharts/amcharts4-geodata/worldLow'

export default {
  name   : 'AmMap',
  props  : { options: { type: Object, required: true } },
  methods: { constructMap },
  mounted,
  data,
  beforeDestroy,
  errorCaptured
}

function errorCaptured(err, vm){
  dispose(vm.$data.map)
  console.error(err)
}

function data(){
  const map = {}

  return { map }
}

function beforeDestroy(){ dispose(this.map) }

function mounted (){
  useTheme(am4themes_animated) // eslint-disable-line
  setTimeout(this.constructMap, 50) // not sure why but map does not mount without a bit of a time out
}

function constructMap(){
  geodata = geoDataPoliticalUpdate(geodata)
  const { main } = this.options.config
  const map      = createFromConfig({ ...main, geodata }, this.$refs.map, MapChart)

  this.map = new MapBuilder(map, this.options)
}

function dispose(map){ if(map && map.dispose) map.dispose() }


</script>

<style scoped>
  .cont{ width: 100%; height: 450px; }
</style>
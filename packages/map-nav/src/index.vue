<template>
  <div :style="{ height:`${options.height}px`, width:`${options.width}px` }" style="position:relative;">
    <div class="cont" ref='map'></div>
  </div>
</template>
<script>
import { createFromConfig      , useTheme, color }                   from '@amcharts/amcharts4/core'
import { MapChart              , GraticuleSeries, MapPolygonSeries } from '@amcharts/amcharts4/maps'
import { MapBuilder             }                                    from '@modules/map-builder'
import   am4themes_animated                                          from '@amcharts/amcharts4/themes/animated'// eslint-disable-line
import { geoDataPoliticalUpdate }                                    from '@modules/political-mapping'

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

async function constructMap(){

  const geodata = geoDataPoliticalUpdate((await import(/* webpackChunkName: "worldHigh" */ '@amcharts/amcharts4-geodata/worldHigh')).default)

  const { main } = this.options.config
  const map      = createFromConfig({ ...main, geodata }, this.$refs.map, MapChart)

  this.map = new MapBuilder(map, this.options)
}

function dispose(map){ if(map && map.dispose) map.dispose() }


</script>

<style scoped>
  .cont{ width: 100%; height: 450px; }
</style>
<template>
  <div class="row h-100 " >
    <Icons/>
    <div class="col-11">
      <div class="cont" ref='map'></div>
    </div>
    <div class="col-1 h-100 p-3" style="border: red solid 1px;">
      <div class="h-50">
        <div class="btn-group-vertical">
          <button v-on:click="map.goHome()" type="button" class="btn btn-light">
            <Icon name="home"/>
          </button>
          <button type="button" class="btn btn-light">
            <Icon name="plus"/>
          </button>
          <button type="button" class="btn btn-light">
            <Icon name="minus"/>
          </button>
        </div>
      </div>
      <div class="h-50 d-flex flex-column-reverse">
        <div>
        <div class="btn-group-vertical">
          <button type="button" class="btn btn-light ">
            <Icon name="globe"/>
          </button>
          <button type="button" class="btn btn-light ">
            <Icon name="map"/>
          </button>          
        </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import { createFromConfig, useTheme, color, Container, percent, create }           from '@amcharts/amcharts4/core'
import { MapChart, GraticuleSeries, MapPolygonSeries } from '@amcharts/amcharts4/maps'
import { mapConfig, countryClick }                     from '@modules/config'
import   am4themes_animated                            from '@amcharts/amcharts4/themes/animated'// eslint-disable-line

import Icons from '@components/Icons'
import Icon  from '@components/Icon'

export default {
  name : 'AmMap',
  components: { Icons, Icon },
  props: { options: { type: Object, required: true } },
  mounted,
  data,
  beforeDestroy
}

function data(){
  const map     = {}
  const container    = {}

  return { map, container}
}

function beforeDestroy(){ dispose(this.map) }

async function mounted (){
  dispose(this.map)
  useTheme(am4themes_animated) // eslint-disable-line

  const geodata = (await import('@amcharts/amcharts4-geodata/worldHigh')).default
  const map = createFromConfig({ ...mapConfig, geodata }, this.$refs.map, MapChart)


  
  createCountries(this.options, map)
  createGrid(map)

  map.padding(20,20,20,20)
  this.map = map
}

function dispose(map){ if(map && map.dispose) map.dispose() }


function createGrid({ series }){
  const graticuleSeries = series.push(new GraticuleSeries())

  graticuleSeries.mapLines.template.line.stroke = color('#000000');
  graticuleSeries.mapLines.template.line.strokeOpacity = 0.08;
  graticuleSeries.fitExtent = false;
}

function createCountries(opts, { series }){
  const polygonSeries = new MapPolygonSeries()

  series.push(polygonSeries)
  polygonSeries.useGeodata = true

  createCountryTemplate(opts, polygonSeries.mapPolygons)
  return polygonSeries
}

function createCountryTemplate(opts, { template }){
  template.tooltipText = '{name}'
  template.fill        = color('#01463a')
  template.stroke      = color('#9a5917')
  template.strokeWidth = 0.5
  
  createCountryHoverState(template)
  template.events.on('hit', countryClick(opts))
}

function createCountryHoverState({ states }){
  const hoverState  = states.create('hover')

  hoverState.properties.fill = color('#9a5917')
}
</script>

<style scoped>
  .cont{ width: 100%; height: 100%; border: blue solid 1px; min-height: 500px;}
</style>
import { createFromConfig                                   } from '@amcharts/amcharts4/core'
import { MapChart                                           } from '@amcharts/amcharts4/maps'
//import { initEu                                             } from './eu'
import { configureMapSeries                 } from './countries'
import { initControls } from './controls'

export class MapBuilderBase{
  constructor(element, options){
    this.init(element, options)

    configureMapSeries(this)

    if(initControls)
      initControls(this)

    this.mapSeries.toFront()

    if(options.devMode) this.devMode()
  }

  init(element, options){
    const { main }        = options.config
    
    this.map              = createFromConfig({ ...main }, element, MapChart)
    this.options          = options
    this.map.MapBuilder   = this
    this.map.maxZoomLevel = 256
    this.locale           = options.locale

    if(this.locale === 'ar') this.map.rtl = true
  }

  get labelSeries (){ return this.getSeriesById('labelSeries') }

  get labelSeriesAlt (){ return this.getSeriesById('labelSeriesAlt') }

  get euSeries (){ return this.getSeriesById('euSeries') }

  get events (){ return this.map.events }

  get mapSeries (){ return this.getSeriesById('mapSeries') }
  
  get template (){ return this.getSeriesById('mapSeries').mapPolygons.template }

  addCountryEvent(type, fn){  this.mapSeries.mapPolygons.template.events.on(type, fn) }

  getCountry(id){ return this.mapSeries.getPolygonById(id) }
  
  getSeriesById(id){
    let series

    this.map.series.each((s) => {
      if(s.id !== id) return
      series = s
    })

    return series
  }

  devMode(){
    this.map.seriesContainer.events.on('hit', (ev) => console.log(this.map.svgPointToGeo(ev.svgPoint)))
  }
}
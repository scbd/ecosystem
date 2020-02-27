

import { create, useTheme, Label, color, Slider, ease, ColorSet, Image, Button, Sprite  }  from '@amcharts/amcharts4/core'
import { projections, MapChart, MapPolygonSeries                       }  from '@amcharts/amcharts4/maps'
import { parties        } from '@scbd/am4-map-base/src/config/parties'

import   am4themes_animated   from '@amcharts/amcharts4/themes/animated'// eslint-disable-line
import   geoData              from '@amcharts/amcharts4-geodata/worldLow'

import { getPictoralData } from './pictoral'

const playPath  = 'M12 2c6.625 0 12 5.375 12 12s-5.375 12-12 12-12-5.375-12-12 5.375-12 12-12zM18 14.859c0.313-0.172 0.5-0.5 0.5-0.859s-0.187-0.688-0.5-0.859l-8.5-5c-0.297-0.187-0.688-0.187-1-0.016-0.313 0.187-0.5 0.516-0.5 0.875v10c0 0.359 0.187 0.688 0.5 0.875 0.156 0.078 0.328 0.125 0.5 0.125s0.344-0.047 0.5-0.141z'
const pausePath = 'M12 2c6.625 0 12 5.375 12 12s-5.375 12-12 12-12-5.375-12-12 5.375-12 12-12zM12 22.5c4.688 0 8.5-3.813 8.5-8.5s-3.813-8.5-8.5-8.5-8.5 3.813-8.5 8.5 3.813 8.5 8.5 8.5zM13.5 19c-0.281 0-0.5-0.219-0.5-0.5v-9c0-0.281 0.219-0.5 0.5-0.5h3c0.281 0 0.5 0.219 0.5 0.5v9c0 0.281-0.219 0.5-0.5 0.5h-3zM7.5 19c-0.281 0-0.5-0.219-0.5-0.5v-9c0-0.281 0.219-0.5 0.5-0.5h3c0.281 0 0.5 0.219 0.5 0.5v9c0 0.281-0.219 0.5-0.5 0.5h-3z'

useTheme(am4themes_animated)
parties.sort(() => .5 - Math.random())

export class MapBuilder{
  constructor(elements){
    this.createMaps(elements) // this.map && this.hiddenMap
    this.map.events.on('ready', () => this.init())
  }

  init(){
    this.state = { index: -1, morphToPolygon: '', countryIndex: 0 }
    this.createSlider()
    this.createLabel()
    this.createFlag()
    this.pausePlayButton()
    this.start()
  }

  createMaps({ mapElement, hiddenMapElement }){
    this.createMap(mapElement)
    this.createHiddenMap(hiddenMapElement)
  }

  createHiddenMap(hiddenMapElement){
    try {
      this.hiddenMap = create(hiddenMapElement, MapChart)
      configMap(this.hiddenMap)

      this.hiddenMapSeries            = this.hiddenMap.series.push(new MapPolygonSeries())
      this.hiddenMapSeries.useGeodata = true
      this.hiddenMapSeries.include    = [ parties[0] ]
    }
    catch (e){
      this.hiddenMap.raiseCriticalError(new Error('Map geodata could not be loaded. Please download the latest <a href="https://www.amcharts.com/download/download-v4/">amcharts geodata</a> and extract its contents into the same directory as your amCharts files.'));
    }
  }

  createMap(mapElement){
    try {
      this.map                  = create(mapElement, MapChart)
      configMap(this.map)

      this.mapSeries            = this.map.series.push(new MapPolygonSeries())
      this.mapSeries.useGeodata = true
      this.mapSeries.include    = [ parties[0] ]
    }
    catch (e){
      this.map.raiseCriticalError(new Error('Map geodata could not be loaded. Please download the latest <a href="https://www.amcharts.com/download/download-v4/">amcharts geodata</a> and extract its contents into the same directory as your amCharts files.'));
    }
  }

  changeCountry(){
    const { length }        = parties
    const { slider, state } = this

    state.countryIndex = Math.round((length - 1) * slider.start)

    if (state.index == state.countryIndex) return

    this.hiddenMapSeries.data    = []
    this.hiddenMapSeries.include = [ parties[state.countryIndex] ]
    state.index                  = state.countryIndex

    this.hiddenMapSeries.events.once('validated', () => this.onHiddenMapSeriesValidated())
  }

  onHiddenMapSeriesValidated(){
    const { state } = this

    state.morphToPolygon = this.hiddenMapSeries.mapPolygons.getIndex(0)

    if(!state.morphToPolygon) return

    const countryPolygon  = this.mapSeries.mapPolygons.getIndex(0)
    const { morpher }     = countryPolygon.polygon
    const randomColor     = (new ColorSet()).getIndex(Math.round(Math.random() * 20))

    morpher.morphToPolygon(state.morphToPolygon.polygon.points)
    countryPolygon.animate({ property: 'fill', to: randomColor }, 1000)

    this.animateLabel()
    this.animateFlag()
    getPictoralData()
  }

  start(){
    const { state, slider } = this

    state.interval = setInterval(() => {
      let next = slider.start + 1 / parties.length

      if (next >= 1) next =0
      this.button.toFront()
      slider.animate({ property: 'start', to: next }, 500);
    }, 5000)

    slider.events.on('rangechanged', () => this.changeCountry())
  }


  pausePlayButton(){
    const { state } = this
    const button = this.map.chartContainer.createChild(Button)
  
    button.padding(5, 5, 5, 5)
    button.align = 'right'
    button.valign = 'bottom'
    button.marginRight = -50
    button.events.on('hit', () => {
      if(!state.interval){
        button.icon.path = pausePath
        return this.start()
      }
      clearInterval(state.interval)
      button.icon.path = playPath
      state.interval = 0
    })
    button.icon = new Sprite()
    button.icon.path = pausePath
    this.button = button
    this.button.toFront()
  }

  animateLabel(){
    const { label  }      = this
    const animationProps  = { property: 'y', to: 1000 }
    const animation       = label.animate(animationProps, 300);
    const { events }      = animation

    events.once('animationended', () => this.labelAnimationEnded())
  }

  animateFlag(){
    const { flag  }       = this
    const animationProps  = { property: 'y', to: 750 }
    const animation       = flag.animate(animationProps, 300);
    const { events }      = animation

    events.once('animationended', () => this.flagAnimationEnded())
  }

  flagAnimationEnded(){
    const { morphToPolygon } = this.state
    const { id:code }        = morphToPolygon.dataItem.dataContext

    this.changeFlag(code.toLowerCase())

    this.flag.animate({ property: 'y', to: 10 }, 300, ease.quadOut)
  }

  labelAnimationEnded(){
    const { morphToPolygon } = this.state
    const { name }           = morphToPolygon.dataItem.dataContext

    this.label.text = name
    this.label.y    = -50

    this.label.animate({ property: 'y', to: 110 }, 300, ease.quadOut)
  }

  createLabel(){
    const label       = this.map.chartContainer.createChild(Label)

    label.x           = 20
    label.fill        = color('#000000')
    label.fontSize    = 45
    label.fontWeight  = 'bold'


    const countryPolygon = this.mapSeries.getPolygonById(parties[0])
    const { name }       = countryPolygon.dataItem.dataContext

    label.text        = name
    label.fillOpacity = 1
    label.fontFamily  = 'BenchNine, sans-serif'
    label.fill        = color('#009b48')
    this.label        = label
  }

  createFlag(code = parties[0].toLowerCase()){
    const flag = this.map.chartContainer.createChild(Image)

    flag.href       = `https://cdn.cbd.int/svg-country-flags@1.2.7/svg/${code}.svg`
    flag.maxHeight  = 150
    flag.width  = 100
    flag.height = 100
    flag.nonScaling = true
    flag.x          = 20
    this.flag       = flag
  }

  changeFlag(code){
    this.flag.href = `https://cdn.cbd.int/svg-country-flags@1.2.7/svg/${code}.svg`
    this.flag.y    = -50
  }

  createSlider(){
    const slider = this.map.createChild(Slider)

    slider.padding(0, 0, 0, 70)
    slider.background.padding(0, 0, 0, 70)
    slider.valign       = 'bottom'
    slider.percentWidth = 100
    this.slider         = slider
  }
}

function configMap(map){
  map.projection    = new projections.Mercator()
  map.geodata       = geoData

  map.padding(10, 200, 10, 5)

  map.minZoomLevel  = 0.9
  map.zoomLevel     = 0.9
  map.maxZoomLevel  = 1
}
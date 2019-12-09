import { Button, Sprite, color } from '@amcharts/amcharts4/core'

export const countryClick = (opts) => (ev) => {
  const { host, basePath, search } = opts
  const code = ev.target.dataItem.dataContext.id
  
  window.location.href = `${host}${basePath}${search}${code}`
}


export const backGround = {
  fill       : '#ffffff',
  fillOpacity: 1
}

export const backgroundSeries= {
  mapPolygons: {
    polygon: {
      fill       : '#BBDEFB',
      fillOpacity: 1
    }
  }
}

export const zoomControl = {}

export const chartContainer = { callback: homeButton }

export const countries = {
  type       : 'MapPolygonSeries',
  useGeodata : true,
  mapPolygons: {
    tooltipText: '{name}',
    fill       : '#01463a',
    stroke     : '#9a5917',
    strokeWidth: 0.5,
    states     : { hover: { properties: { fill: '#9a5917' } } }
  }
}

export const grid = {
  type: 'GraticuleSeries',

  mapLines: {
    line: {
      stroke      : '#000000',
      strokeOpacit: .08
    }
  }
}

export const series =    [ grid, countries  ]

export const mapConfig = {
  projection   : 'Orthographic',
  panBehavior  : 'rotateLongLat',
  deltaLatitude: -20,
  backGround,
  backgroundSeries,
  zoomControl,
  chartContainer,
  events       : { ready }
}


function homeButton(){
  const button = this.createChild(Button)

  button.padding(5, 5, 5, 5)
  button.align = 'right'
  button.marginRight = 15
  button.events.on('hit', (evt) => evt.target._parent._parent.goHome())
  button.icon = new Sprite()
  button.icon.path = 'M16,8 L14,8 L14,16 L10,16 L10,10 L6,10 L6,16 L2,16 L2,8 L0,8 L8,0 L16,8 Z M16,8'
}

let   animation, delayed

function ready(ev){
  const   code        = getCountryFromQuery()
  const   map         = ev.target
  const polygonSeries = map.series.values[0]

  polygonSeries.toFront()

  if(code) return goToCountry({ map, code })

  animation = map.animate({ property: 'deltaLongitude', to: 200000 }, 20000000)

  map.seriesContainer.events.on('down',             () => { animation.pause() })
  map.seriesContainer.events.on('up',               () => { setAnimationDelay(map) })
  map.seriesContainer.events.on('swipe',            () => { stopStartDelayAnimation(animation) })
  map.seriesContainer.events.on('wheel',            () => { stopStartDelayAnimation(animation) })
  map.seriesContainer.events.on('zoomlevelchanged', () => { stopStartDelayAnimation(animation) })
}

function stopStartDelayAnimation(animation){
  animation.pause()
  setAnimationDelay()
}

function setAnimationDelay(){
  if(delayed) clearTimeout(delayed)

  delayed = setTimeout(() => {
    animation.resume()
    clearTimeout(delayed)
    delayed = ''
  }, 5000)
}


function goToCountry({ map, code }){
  const polygonSeries = map.series.values[0]
  const polygon       = polygonSeries.getPolygonById(code.toUpperCase())
  

  polygon.fill                      = color('#9a5917')
  polygon.tooltip.getFillFromObject = false;
  polygon.tooltip.background.fill   = color('#01463a')

  map.deltaLatitude  = -polygon.visualLatitude
  map.deltaLongitude = -polygon.visualLongitude

  map.zoomIn()
}

function getCountryFromQuery(){
  const urlParams = new URLSearchParams(location.search);

  return urlParams.get('country');
}


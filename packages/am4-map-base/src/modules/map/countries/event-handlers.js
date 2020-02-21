import { setCountryState, getLngLat, setDelta } from './service'
import { addCountryLabel, deleteCountryLabel  } from './labels'
import { getPoliticalRelations                } from './political-mappings'

const activeCountries = new Set()

export const zoomToCountryEventHandler = (mapBuilder) => (ev) => { // eslint-disable-line
  const   code             = ev.target.dataItem.dataContext.id
  const { animation, map } = mapBuilder
  const   relatedCountries = getPoliticalRelations(code, mapBuilder)
  const   isLast           = (index) => relatedCountries.length-1 == index

  resetActiveCountries(mapBuilder)

  if(animation)
    animation.pause()

  for (const [ i, countryPolygon ] of relatedCountries.entries()){
    setCountryActive(countryPolygon)

    if(!isLast(i)) return
    const { zoomLevel = 2 } = countryPolygon.dataItem
    const lngLat            = getLngLat(code, countryPolygon)

    setDelta(map, lngLat)
    addCountryLabel(countryPolygon, mapBuilder)
    
    ev.target.series.chart.zoomToGeoPoint(lngLat, zoomLevel, true, 2000)
  }
}

function setCountryActive(countryPolygon){
  countryPolygon.isActive = true
  activeCountries.add(countryPolygon)
}

function resetActiveCountries(){
  for (const countryPolygon of activeCountries)
    countryPolygon.isActive = false
    
  deleteCountryLabel()
  activeCountries.clear()
}

export const onHitDevMode = (mapBuilder) => (ev) => {
  if(!mapBuilder.options.devMode) return
  const code  = ev.target.dataItem.dataContext.id
  const geo   = mapBuilder.map.svgPointToGeo(ev.svgPoint)

  console.log({ ...geo, code })
}

export const setStateHover = (mapBuilder) => (ev) => {
  const code = ev.target.dataItem.dataContext.id

  setCountryState(code, 'hover', mapBuilder)
}

export const setStateActive = (mapBuilder) => (ev) => {
  const code = ev.target.dataItem.dataContext.id

  setCountryState(code, 'hover', mapBuilder)
}

export const resetCountryState = (mapBuilder) => (ev) => {
  const code = ev.target.dataItem.dataContext.id

  setCountryState(code, 'default', mapBuilder)
}
import { setCountryState, pushHitEventFn, getLngLat, setDelta, zoomToCountry, hasPoliticalMappings, politicalMapKeys, setMapHomePositionToCountryGeoPoint } from '../countries'
import { euCountries, name, euToolTipTemplate   } from './config'
import { addCountryLabel, deleteCountryLabel } from '../countries/labels'

const isEuByPoliticalMapping = politicalMapKeys.filter((k) => euCountries.includes(hasPoliticalMappings(k)))
const eu = {}

export const isEu = (code) => euCountries.concat(isEuByPoliticalMapping).includes(code)

export const addEuLabel = ({ labelSeries, locale, euSeries }) => {
  const text           = name[locale]
  const countryPolygon = euSeries.getPolygonById('CZ')

  labelSeries.hide()
  eu.label      = labelSeries.mapImages.create()
  eu.label.hide()

  eu.label.latitude  = countryPolygon.visualLatitude
  eu.label.longitude = countryPolygon.visualLongitude -1.5
  eu.label.text      = text

  eu.label.children.getIndex(0).text = text
  
  labelSeries.toFront()
  labelSeries.appear()
}

export const showEuLabel = (mapBuilder) => {
  if(!eu.label) addEuLabel(mapBuilder)
  eu.label.appear()
  mapBuilder.labelSeries.toFront()
}
export const hideEuLabel = (mapBuilder) => {
  if(!eu.label) addEuLabel(mapBuilder)
  eu.label.hide()
}
export const setEuState = (state ='default') => (mapBuilder) => () => {
  const { euSeries } = mapBuilder

  if(state!=='active') hideEuLabel(mapBuilder)

  for (const code of euCountries){
    const country = euSeries.getPolygonById(code)

    country.setState(state)
    setCountryState(code, state, mapBuilder)
    country.invalidate()
  }
}

export const setEuActive = (mapBuilder) => setEuState('active')(mapBuilder)()

export const zoomToEu = (mapBuilder) => {
  const { map, euSeries, animation } = mapBuilder

  deleteCountryLabel()
  if(animation)
    animation.kill()

    
  // Find extreme coordinates for all pre-zoom countries
  for (const code of euCountries){
    const country = euSeries.getPolygonById(code)

    if(code!=='CZ') continue

    const lngLat = getLngLat(mapBuilder)(country)
    
    setDelta(map, lngLat)
  }
  showEuLabel(mapBuilder)
  setEuActive(mapBuilder)

  map.goHome(2500)
}

// create Eu's home on the map
export const mapHomePositionToEu = (mapBuilder) => {// eslint-disable-line
  const { map, euSeries } = mapBuilder
  const   code             = 'CZ'
  const   countryPolygon   = euSeries.getPolygonById(code)

  setMapHomePositionToCountryGeoPoint({ code, map, countryPolygon })
  map.homeZoomLevel = 2.996
  zoomToEu(mapBuilder)
}

// TTAS = tool tip action string
const toolTipActionString  = code => ` onclick="window.TTAS('${code}')" href="#" `

export const configEuButton = (mapBuilder, clickCallBack) => {
  const   button   = mapBuilder.euButtonSeries.mapImages.create()
  const { locale } = mapBuilder.options

  button.latitude   = 47.241955823271525
  button.longitude  = -20.103435546206896
  button.name       = name[locale]

  button.appear()
  button.events.on('hit', clickCallBack)
}

const zoomTo = (mapBuilder) => ({ detail }) => {
  const { euIdentifier } = mapBuilder.options
  const  { euSeries } = mapBuilder

  deleteCountryLabel()
  hideEuLabel(mapBuilder)
  setEuState()(mapBuilder)()
 
  if(detail === euIdentifier) return zoomToEu(mapBuilder)

  const countryPolygon =euSeries.getPolygonById(detail)

  addCountryLabel(countryPolygon, mapBuilder)
  zoomToCountry(mapBuilder)(detail)
  countryPolygon.setState('active')
  setCountryState(detail, 'active', mapBuilder)
}

export const initEu = (mapBuilder, { callBack, countryToolTipAction,  euActionToolTipAction } = {}) => {
  mapBuilder.euButtonSeries.toFront()
  if(!countryToolTipAction &&  !euActionToolTipAction){
    window.TTAS = (code) => {
      deleteCountryLabel()
      hideEuLabel(mapBuilder)
      setEuState()(mapBuilder)
      window.document.dispatchEvent(new CustomEvent('zoomToParty', { detail: code }))
    }
    window.document.addEventListener('zoomToParty', zoomTo(mapBuilder))
  }
  callBack = callBack? callBack(mapBuilder) : clickHandler(mapBuilder)
  configEuButton(mapBuilder, callBack)
  initTooltip(mapBuilder, { countryToolTipAction,  euActionToolTipAction })
  pushHitEventFn(setEuState())
  addEuLabel(mapBuilder)
}

export const initTooltip = (mapBuilder, { countryToolTipAction, euActionToolTipAction }) => {
  const { euSeries, options } = mapBuilder


  for (const code of euCountries){
    const   country                 = euSeries.getPolygonById(code)
    const { locale, euIdentifier }  = options
    const countryToolTip            = countryToolTipAction? countryToolTipAction(code) : toolTipActionString(code)
    const euActionToolTip           = euActionToolTipAction? euActionToolTipAction(euIdentifier) : toolTipActionString(euIdentifier)
  

    country.tooltipHTML = euToolTipTemplate({ countryToolTip, euActionToolTip, locale })
  }
}
export const clickHandler = (mapBuilder) => () => zoomToEu(mapBuilder)
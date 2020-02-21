import { pushOverEventFn, hasPoliticalMappings, styleHomePolygon, politicalMapKeys, setMapHomePositionToCountryGeoPoint } from '../countries'
import { euCountries, name, euToolTipTemplate   } from './config'


const isEuByPoliticalMapping = politicalMapKeys.filter((k) => euCountries.includes(hasPoliticalMappings(k)))
const euFourPoints           = { north: '', south: '', east: '', west: '' }

const setEuFourPoints = (country) => {
  const { north, south, east, west } = country

  if(!euFourPoints.north || north > euFourPoints.north) euFourPoints.north = north
  if(!euFourPoints.south || south < euFourPoints.south) euFourPoints.south = south
  if(!euFourPoints.west  || west  < euFourPoints.west) euFourPoints.west   = west
  if(!euFourPoints.east  || east  > euFourPoints.east) euFourPoints.east   = east
}

export const isEu = (code) => euCountries.concat(isEuByPoliticalMapping).includes(code)

export const addEuLabel = ({ labelSeries, locale }, countryPolygon) => {
  const text       = name[locale]
  const label      = labelSeries.mapImages.create()

  label.latitude  = countryPolygon.visualLatitude
  label.longitude = countryPolygon.visualLongitude -1.5
  label.text      = text

  label.children.getIndex(0).text = text
  label.appear()
  labelSeries.toFront()
}

export const zoomToEu = (mapBuilder) => {
  const { map, mapSeries } = mapBuilder

  mapBuilder.animation.pause()

  // Find extreme coordinates for all pre-zoom countries
  for (const code of euCountries){
    const country = mapSeries.getPolygonById(code)

    setEuFourPoints(country)
    map.homeZoomLevel = 2.996
    styleHomePolygon(country, false)

    if(code!=='CZ') continue

    setMapHomePositionToCountryGeoPoint({ code, map, countryPolygon: country })
    addEuLabel(mapBuilder, country)
    country.deepInvalidate()
  }
  
  const { north, south, east, west } = euFourPoints

  map.zoomToRectangle(north, south, east, west, 0.7, true)
}

// create Eu's home on the map
export const mapHomePositionToEu = (mapBuilder) => {// eslint-disable-line
  const { map, mapSeries } = mapBuilder
  const   code             = 'CZ'
  const   countryPolygon   = mapSeries.getPolygonById(code)

  setMapHomePositionToCountryGeoPoint({ code, map, countryPolygon })

  zoomToEu(mapBuilder)
}
// TTAS = tool tip action string
const countryTTAS  = code => `onclick="window.document.dispatchEvent(new CustomEvent("zoomToParty", { detail: '${code}'}))" href="#"`
const euActionTTAS  = code => `onclick="window.document.dispatchEvent(new CustomEvent("zoomToParty", { detail: ${code}}))" href="#"`

export const euHoverToolTip =  ({ countryToolTipAction,  euActionToolTipAction }) => ({ options })  => (ev) => {
  const code = ev.target.dataItem.dataContext.id
  const { locale, euIdentifier } = options

  const countryToolTip = countryToolTipAction? countryToolTipAction(code) :countryTTAS(code)
  const euActionToolTip = euActionToolTipAction? euActionToolTipAction(euIdentifier) : euActionTTAS(euIdentifier)

  if(!isEu(code)) return ev.target.tooltipHTML = '<span>{name}</span>'
  
  ev.target.tooltipHTML = euToolTipTemplate({ countryToolTip, euActionToolTip, locale })
}

export const configEuButton = (mapBuilder, clickCallBack) => {
  const   button   = mapBuilder.euSeries.mapImages.create()
  const { locale } = mapBuilder.options

  button.latitude   = 47.241955823271525
  button.longitude  = -20.103435546206896
  button.name       = name[locale]

  button.appear()
  button.events.on('hit', clickCallBack)
}

export const initEu = (mapBuilder, { callBack, countryToolTipAction,  euActionToolTipAction }) => {
  callBack = callBack? callBack(mapBuilder) : clickHandler(mapBuilder)
  configEuButton(mapBuilder, callBack)
  
  pushOverEventFn(euHoverToolTip({ countryToolTipAction,  euActionToolTipAction  }))
}

export const clickHandler = (mapBuilder) => () => {
  zoomToEu(mapBuilder)
}
import { pushOutEventFn, pushOverEventFn } from './event-queues'
import { getPoliticalRelations           } from './political-mappings'
import { zoomLevelDataArray              } from './config'
import { getStyle                        } from '../config'
import { isEu } from '../eu'

export const isCustomZoomCenter = (code) => zoomLevelDataArray.map(({ id, zoomGeoPoint }) => zoomGeoPoint? id : '').includes(code)
export const configureMapSeries = (mb) => { mb.mapSeries.data = zoomLevelDataArray }
export const setHomeGeoPoint    = (map, { latitude, longitude }) => map.homeGeoPoint = { latitude, longitude }
export const getVisualCenter    = (countryPolygon) => ({ latitude: countryPolygon.visualLatitude, longitude: countryPolygon.visualLongitude })

export const getLngLat = (mapBuilder) => (countryPolygon) => {
  const { zoomGeoPoint, dataContext } = countryPolygon.dataItem
  const { id:code }                   = dataContext

  if(isEu(code)) countryPolygon = mapBuilder.euSeries.getPolygonById(code)

  return isCustomZoomCenter(code)? zoomGeoPoint : getVisualCenter(countryPolygon)
}
export const setCountryState = (code, state, mapBuilder) => {
  const targetCountries = getPoliticalRelations(code.toUpperCase(), mapBuilder)

  for (const c of targetCountries)
    c.setState(state)
}

export const setDelta = (map, { latitude, longitude }) => {
  map.deltaLatitude  = -latitude
  map.deltaLongitude = -longitude
}

export const stylePolygon = (country, { style = 'default', hideToolTip = false }={}) => {
  country.fill = getStyle()[style]
  if(hideToolTip){
    country.showTooltipOn = 'doNotShow'
    country.dispatch('over')
    country.dispatch('out')
  }
}

const outCountryEventHandler = (mapBuilder) => (ev) => {
  const code = ev.target.dataItem.dataContext.id

  setCountryState(code, 'default', mapBuilder)
}

const overCountryEventHandler = (mapBuilder) => (ev) => {
  const code = ev.target.dataItem.dataContext.id

  setCountryState(code, 'hover', mapBuilder)
}

pushOutEventFn(outCountryEventHandler)
pushOverEventFn(overCountryEventHandler)
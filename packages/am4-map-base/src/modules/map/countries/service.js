import { getPoliticalRelations } from './political-mappings'
import { zoomLevelData } from './zoom-config-set'

export const setCountryState = (code, state, mapBuilder) => {
  const targetCountries = getPoliticalRelations(code.toUpperCase(), mapBuilder)

  for (const c of targetCountries)
    c.setState(state)
}

export const getVisualCenter = (countryPolygon) => ({ latitude: countryPolygon.visualLatitude, longitude: countryPolygon.longitude })

export const setDelta = (map, { latitude, longitude }) => {
  map.deltaLatitude  = -latitude
  map.deltaLongitude = -longitude
}

export const setHomeGeoPoint = (map, { latitude, longitude }) => map.homeGeoPoint = { latitude, longitude }

export const styleHomePolygon = (country, hideToolTip = true) => {
  country.fill          = getStyle().hover
  if(hideToolTip){
    country.showTooltipOn = 'doNotShow'
    country.dispatch('over')
    country.dispatch('out')
  }
}

export const configureMapSeries = (mb) => { mb.mapSeries.data = [ ...zoomLevelData ] }

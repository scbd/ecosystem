import { getPoliticalRelations } from '@scbd/am4-map-lib'

import { isEu, setCountryState, setHomeGeoPoint, setDelta, stylePolygon, getVisualCenter, isCustomZoomCenter } from '../service'
import { addCountryLabel                                                                                     } from '../labels'

export const setMapHomePositionToCountryGeoPoint = ({ code, countryPolygon, map }) => {
  const { zoomGeoPoint } = countryPolygon.dataItem
  const   lngLat         = isCustomZoomCenter(code)? zoomGeoPoint : getVisualCenter(countryPolygon)

  setDelta(map, lngLat)
  setHomeGeoPoint(map, lngLat)
}

export const mapHomePositionToCountry = (id, mapBuilder) => { // eslint-disable-line
  const { animation, map, euSeries } = mapBuilder
  
  const   code             = id.toUpperCase()
  const   relatedCountries = getPoliticalRelations(code, mapBuilder)
  const   isLast           = (index) => relatedCountries.length-1 == index

  if(animation)
    animation.pause()

  for (const [ i, countryPolygon ] of relatedCountries.entries()){
    const { zoomLevel=2, dataContext } = countryPolygon.dataItem
    const { id                       } = dataContext

    const country = isEu(id)? euSeries.getPolygonById(id) || countryPolygon : countryPolygon

    stylePolygon(country)
    setCountryState(code, 'active', mapBuilder)

    if(!isLast(i)) continue
    addCountryLabel(country, mapBuilder)

    setMapHomePositionToCountryGeoPoint({ code, countryPolygon: country, map })
    country.setState('active')
    map.homeZoomLevel = zoomLevel
  }

  map.goHome(2500)
}

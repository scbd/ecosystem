import { setHomeGeoPoint, setDelta, styleHomePolygon, getVisualCenter, isCustomZoomCenter } from '../service'

import { getPoliticalRelations } from '../political-mappings'
import { addCountryLabel       } from '../labels'


export const setMapHomePositionToCountryGeoPoint = ({ code, countryPolygon, map }) => {
  const { zoomGeoPoint } = countryPolygon.dataItem

  const lngLat = isCustomZoomCenter(code)? zoomGeoPoint : getVisualCenter(countryPolygon)

  setDelta(map, lngLat)
  setHomeGeoPoint(map, lngLat)
}

export const mapHomePositionToCountry = (id, mapBuilder) => { // eslint-disable-line
  const   code             = id.toUpperCase()
  const { animation, map } = mapBuilder
  const   relatedCountries = getPoliticalRelations(code, mapBuilder)
  const   isLast           = (index) => relatedCountries.length-1 == index

  if(animation)
    animation.pause()

  for (const [ i, countryPolygon ] of relatedCountries.entries()){
    const { zoomLevel=2 } = countryPolygon.dataItem

    map.homeZoomLevel = zoomLevel
  
    setMapHomePositionToCountryGeoPoint({ code, countryPolygon, map })
    
    styleHomePolygon(countryPolygon)

    if(isLast(i)) addCountryLabel(countryPolygon, mapBuilder)
  }

  map.goHome(2500)
}

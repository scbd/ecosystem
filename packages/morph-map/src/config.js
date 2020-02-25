import { DefaultOptions } from '@scbd/am4-map-base/src/default-options'
//import { parties        } from '@scbd/am4-map-base/src/config/parties'
// import { propertyFields } from '@scbd/am4-map-base/src/config'
import am4geodata_worldHigh from "@amcharts/amcharts4-geodata/worldHigh";
const parties = ["AF", "AO", "AR", "AM", "AU", "AT", "AZ", "BD", "BY", "BE", "BO", "BA", "BW", "BR", "BG", "KH", "CM", "CA", "CF", "TD", "CL", "CN", "CO", "CG", "CD", "CR", "CI", "HR", "CU", "CY", "CZ", "DK", "EC", "EG", "ER", "EE", "ET", "FI", "FR", "GE", "DE", "GR", "GL", "GP", "GT", "GN", "GW", "GY", "HT", "HN", "HU", "IS", "IN", "ID", "IR", "IQ", "IE", "IL", "IT", "JM", "JP", "JO", "KZ", "KE", "KP", "KR", "KG", "LA", "LV", "LB", "LS", "LR", "LY", "LT", "LU", "MK", "MG", "MY", "ML", "MT", "MR", "MX", "MD", "MN", "ME", "MA", "MZ", "MM", "NA", "NP", "NL", "NZ", "NI", "NE", "NG", "NO", "OM", "PK", "PA", "PG", "PY", "PE", "PH", "PL", "PT", "RO", "RU", "SA", "SN", "RS", "SK", "SI", "SO", "ZA", "SS", "ES", "SD", "SE", "CH", "SY", "TW", "TJ", "TZ", "TH", "TN", "TR", "TM", "UA", "AE", "GB", "US", "UY", "UZ", "VE", "VN", "YE", "ZM", "ZW"];

export const options = DefaultOptions.get()

export const countries = {
  type                 : 'MapPolygonSeries',
  id                   : 'mapSeries',
  include              : parties[0],
  useGeodata           : true
}

export const countries2 = {
  type                 : 'MapPolygonSeries',
  id                   : 'mapSeries2',
  include              : parties[0],
  useGeodata           : true
}

export const chartContainer = {}
//  { children: [{
//   type        : 'Label',
//   align       : 'center',
//   x           : 100,
//   y           : 100,
//   fill        : '#000000',
//   fontSize    : 35,
//   fontWeight  : 'bold',
//   text        : 'Afghanistan',
//   fillOpacity : 0.2
// }]}

export const slider = {
  type: 'slider',
  paddingTop    : 0,
  paddingBottom : 15,
  paddingRight  : 0,
  paddingLeft   : 60,
  maxHeight: 30,
  background:{
    paddingTop    : 0,
    paddingBottom : 15,
    paddingRight  : 0,
    paddingLeft   : 60,
  },
  marginBottom: 15,
  valign: 'bottom'
}
removeProps(options.config)
addProps(options.config)

function removeProps({ main }){
  delete main.deltaLongitude
  delete main.backgroundSeries
  delete main.zoomControl
  delete main.chartContainer
  delete main.series
  delete main.panBehavior
  delete main.responsive
  delete main.geodataNames
}

function addProps({ main }){
  main.geodata = am4geodata_worldHigh
  main.minZoomLevel = 0.9
  main.zoomLevel    = 0.9
  main.maxZoomLevel = 1
  main.projection = 'Mercator'
  main.paddingTop    = 10
  main.paddingBottom = 20
  main.paddingRight  = 10
  main.paddingLeft   = 20
 //main.chartContainer = chartContainer
  main.series = [countries, countries2 ]
  //main.children = [slider]
}
import worldGeoData  from '@amcharts/amcharts4-geodata/worldLow'
import { geoDataPoliticalUpdate, langPoliticalUpdate, hasMap, getPoliticalRelations, politicalMapKeys } from './service'

export const worldLow = geoDataPoliticalUpdate(worldGeoData)
export { geoDataPoliticalUpdate, langPoliticalUpdate, hasMap, getPoliticalRelations, politicalMapKeys }
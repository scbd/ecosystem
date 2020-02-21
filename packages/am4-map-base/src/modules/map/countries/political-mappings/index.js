import   worldGeoData   from '@amcharts/amcharts4-geodata/worldLow'
import { politicalMap } from './config'

export const worldLow             = geoDataPoliticalUpdate(worldGeoData)
export const hasPoliticalMappings = (id) => politicalMap[id]
export const politicalMapKeys     = Object.keys(politicalMap)
export const findByParent         = (id) => Object.entries(politicalMap).filter(e => e[1]===id).map(e => e[0])

export const langPoliticalUpdate = (langMap) => {
  for (const key in langMap)
    if(hasPoliticalMappings(key))
      langMap[key] = langMap[hasPoliticalMappings(key)]

  return langMap
}

export const getPoliticalRelations = (code, mapBuilder) => {
  const parent = hasPoliticalMappings(code)? hasPoliticalMappings(code) : code
  const target = findByParent(parent).concat([ parent ])

  return target.map(id => mapBuilder.getCountry(id))
}

function geoDataPoliticalUpdate (geoData){
  const features = geoData.features.map(f => ({ ...f })) // deeper clone

  for (const feature of features){
    const { id }  = feature

    if(!politicalMap[id]) continue
    
    const parent = features.find((f) => f.id === politicalMap[id])

    feature.properties.name = parent.properties.name
  }

  return { ...geoData, features }
}


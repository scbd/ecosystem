import { politicalMap } from './map'

export const hasMap = (id) => politicalMap[id]
export const politicalMapKeys = () => Object(politicalMap).keys
export const findByParent = (id) => Object.entries(politicalMap).filter(e => e[1]===id).map(e => e[0])

export const geoDataPoliticalUpdate = (geoData) => {
  const features = geoData.features.map(f => ({ ...f })) // deeper clone

  for (const feature of features){
    const { id }  = feature

    if(!politicalMap[id]) continue
    
    const parent = features.find((f) => f.id === politicalMap[id])

    feature.properties.name = parent.properties.name
  }

  return { ...geoData, features }
}

export const langPoliticalUpdate = (langMap) => {
  for (const key in langMap)
    if(hasMap(key))
      langMap[key] = langMap[hasMap(key)]

  return langMap
}

export const getPoliticalRelations = (code, mapBuilder) => {
  const parent = hasMap(code)? hasMap(code) : code
  const target = findByParent(parent).concat([ parent ])

  return target.map(id => mapBuilder.getCountry(id))
}
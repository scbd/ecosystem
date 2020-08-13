import { politicalMap }  from './config.mjs'

export const hasPoliticalMappings = (id) => politicalMap[id]
export const findByParent         = (id) => Object.entries(politicalMap).filter(e => e[1]===id).map(e => e[0])

export const langPoliticalUpdate = (langMap, isEn = false) => {
  for (const key in langMap)
    if(hasPoliticalMappings(key))
      if(hasPoliticalMappings(key) === 'GB') langMap[key] = `${langMap[key]} (${isEn? 'U.K.':langMap[hasPoliticalMappings(key)]})${(key==='FK'? '*' : '')}`
      else langMap[key] = `${langMap[key]} (${langMap[hasPoliticalMappings(key)]})`

  return langMap
}

export const getPoliticalRelations = (code, mapBuilder) => {
  const parent = hasPoliticalMappings(code)? hasPoliticalMappings(code) : code
  const target = findByParent(parent).concat([ parent ])

  return target.map(id => mapBuilder.getCountry(id))
}

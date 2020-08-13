import superagent from 'superagent'
import consola    from 'consola'
import fs         from 'fs'

import { langPoliticalUpdate } from '../src/political-mappings/index.mjs'

import en from './temp/EN.mjs'
import es from './temp/ES.mjs'
import ar from './temp/AR.mjs'
import fr from './temp/FR.mjs'
import ru from './temp/RU.mjs'
import zh from './temp/ZH.mjs'

const amLangs = { en, es, ar, fr, ru, zh }

import worldLow   from './temp/worldLow.mjs'
import worldHigh  from './temp/worldHigh.mjs'
import worldUltra from './temp/worldUltra.mjs'

export const prePendFile = (data) => {
  const fileName = 'src/lang.mjs'
  const newData  = data + (fs.readFileSync(fileName)).toString()

  return fs.writeFileSync(fileName, newData)
}

export const makeFile = (fileName='src/lang.mjs', data='') => fs.writeFileSync(fileName, data)


async function main (){
  await  makeLangFile()
  makeWorldLow()
}

async function getScbdCountries(){
  try {
    const { body } = await superagent.get('https://api.cbd.int/api/v2015/countries')

    return body
  }
  catch (err){
    consola.error(err)
  }
}

async function makeLangFile(){
  makeFile()

  const scbdCountries = await getScbdCountries()

  for (const { code, name } of scbdCountries)
    for (const locale in amLangs)
      amLangs[locale][code] = name[locale]

  for (const locale in amLangs)
    amLangs[locale] = langPoliticalUpdate(amLangs[locale], locale === 'en')

  for (const locale in amLangs)
    prePendFile(`export const ${locale} = ${JSON.stringify(amLangs[locale])} \n`)

  makeFile('src/amcharts4/lang/en.js', `export default ${JSON.stringify(amLangs.en)}`)
}

function makeWorldLow(){
  const worldLowData   = geoDataPoliticalUpdate(worldLow)
  const worldHighData  = geoDataPoliticalUpdate(worldHigh)
  const worldUltraData = geoDataPoliticalUpdate(worldUltra)

  makeFile('src/worldLow.mjs', `export default ${JSON.stringify(worldLowData)}`)
  makeFile('src/worldHigh.mjs', `export default ${JSON.stringify(worldHighData)}`)
  makeFile('src/worldUltra.mjs', `export default ${JSON.stringify(worldUltraData)}`)
}

function geoDataPoliticalUpdate (geoData){
  const features = geoData.features.map(f => ({ ...f })) // deeper clone

  for (const feature of features){
    const { id } = feature

    if(amLangs.en[id])
      feature.properties.name = amLangs.en[id]
  }

  return { ...geoData, features }
}

main()


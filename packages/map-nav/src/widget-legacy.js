import { buildLegacyWidget, dependencyRef } from '@scbd/self-embedding-component'
import { name, version       } from '../package.json'

const options   = buildOptions()
const propsData = { options }

const { VUE }           = dependencyRef.legacy
const dependencies      = { all: [ VUE ],
                            css: [ 'https://cdn.cbd.int/@scbd/www-css' ] }

const config            = { version, name, propsData, dependencies }

buildLegacyWidget(config)

function buildOptions(){
  const basePath              = '/countries'
  const countryParamName      = 'country'
  const euIdentifier          = 'eur'
  const initEu                = false // false means manually init eu with custom functionality

  return { countryParamName, euIdentifier, initEu, basePath }
}

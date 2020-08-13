import { buildWidget, dependencyRef } from '@scbd/self-embedding-component'
import { name, version              } from '../../../package.json'

const options   = buildOptions()
const propsData = { options }
const selfUrl = 'http://localhost:8089/dist/browser/index.js'

const { VUE } = dependencyRef
const dependencies      = { all: [VUE], 
                            css: ['https://cdn.cbd.int/@scbd/www-css']
                          }

const config            = { version, name, propsData, dependencies, selfUrl }

buildWidget(config)

function buildOptions(){
  const countryParamName      = 'country'
  const euIdentifier          = 'eur'
  const initEu                = false // false means manually init eu with custom functionality

  return { countryParamName: 'country', euIdentifier, initEu }
}
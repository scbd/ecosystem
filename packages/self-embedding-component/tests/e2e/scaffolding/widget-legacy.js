import { buildLegacyWidget,  dependencyRef } from '../../../src/index.mjs'

const name      = '@scbd/action-search'
const version   = '0.0.11'
const options   = buildOptions()
const propsData = { options, forceEnv:'dev' }

const selfUrl = 'http://localhost:8089/dist/legacy/umd/index.umd.js'

const { VUE, VUE_I18N, SCBD_SSO_AUTH } = dependencyRef.legacy

const dependencies      = { all: [VUE, VUE_I18N, SCBD_SSO_AUTH ], 
                            vuePlugins:[VUE_I18N, SCBD_SSO_AUTH], 
                            css: ['https://cdn.cbd.int/@scbd/www-css']
                          }

const config            = { version, name, propsData, dependencies, selfUrl }

buildLegacyWidget(config)

function buildOptions(){
  return {}
}

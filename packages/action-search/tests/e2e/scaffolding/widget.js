import { buildWidget, dependencyRef } from '@scbd/self-embedding-component'
import { name, version              } from '../../../package.json'

const libName   = name.replace('https://cdn.cbd.int/', '')//hack for browser build
const options   = {}
const propsData = { options, forceEnv:'dev' }

const selfUrl = 'http://localhost:8089/dist/browser/index.js'

const { VUE, VUE_I18N, SCBD_SSO_AUTH } = dependencyRef

const dependencies      = { all: [VUE, VUE_I18N, SCBD_SSO_AUTH ], 
                            vuePlugins:[VUE_I18N, SCBD_SSO_AUTH], 
                            css: ['https://cdn.cbd.int/@scbd/www-css']
                          }

const config            = { version, name:libName, propsData, dependencies, selfUrl }

buildWidget(config)

import { buildWidget, dependencyRef } from '@scbd/self-embedding-component'
import { name, version              } from '../../../package.json'

const libName   = name.replace('https://cdn.cbd.int/', '')//hack for browser build
const options   = {}
const propsData = { options, forceEnv:'dev' }

const selfUrl = 'http://localhost:8091/dist/browser/index.js'

const { VUE, VUE_I18N } = dependencyRef

const  SCBD_SSO_AUTH = { url: `https://cdn.cbd.int/@scbd/sso-vue-plugin-scbd/dist/browser/index.js`, name: 'sso-vue-plugin-scbd' }

const dependencies      = { all: [VUE, VUE_I18N, SCBD_SSO_AUTH ], 
                            vuePlugins:[VUE_I18N, SCBD_SSO_AUTH], 
                            css: ['https://cdn.cbd.int/@scbd/www-css']
                          }

const config            = { version, name:libName, propsData, dependencies, selfUrl }

buildWidget(config)

import { buildWidget, dependencyRef } from '@scbd/self-embedding-component'
import { name, version              } from '../../../package.json'

const   regX        = new RegExp('(@[^/]+/[^/]+)', 'ig')
const [ libName   ] = name.match(regX)
const   options     = {}
const   propsData   = { options }

const selfUrl = 'http://localhost:8089/dist/browser/index.js'

const { VUE, VUE_I18N } = dependencyRef


const dependencies      = { all       : [ VUE, VUE_I18N ],
                            vuePlugins: [ VUE_I18N ],
                            css       : [ 'https://cdn.cbd.int/@scbd/www-css' ] }

const config            = { version, name: libName, propsData, dependencies, selfUrl }

buildWidget(config)

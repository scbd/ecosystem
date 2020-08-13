import   Component                          from '../../../src/index.js'
import { buildLegacyWidget, dependencyRef } from '@scbd/self-embedding-component'
import { name             , version }       from '../../../package.json'

const   regX        = new RegExp('(@[^/]+/[^/]+)', 'ig')
const [ libName   ] = name.match(regX)
const   options     = {}
const   propsData   = { options }

const selfUrl = 'http://localhost:8089/dist/legacy/umd/index.umd.min.js'

const { VUE, VUE_I18N } = dependencyRef.legacy

const dependencies      = { all       : [ VUE, VUE_I18N ],
                            vuePlugins: [ VUE_I18N ],
                            css       : [ 'https://cdn.cbd.int/@scbd/www-css' ] }

const config            = { version, name: libName, propsData, dependencies, selfUrl }

buildLegacyWidget(Component, config )

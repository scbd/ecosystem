import Component from './index.js'
import { buildLegacyWidget, dependencyRef } from '@scbd/self-embedding-component'
import { name, version                    } from '../package.json'

const libName   = name.replace('https://cdn.cbd.int/', '')//hack for browser build
const propsData = { options: {}}

const { VUE, VUE_I18N } = dependencyRef.legacy
const selfUrl           = 'https://aa.cbddev.xyz/ie/legacy/umd/index.umd.js'

const dependencies      = { all       : [ VUE ],
                            // vuePlugins: [ VUE_I18N ],
                            css       : [ 'https://cdn.cbd.int/@scbd/www-css' ] }

const config            = { version, name: libName, propsData, dependencies, selfUrl }

export default buildLegacyWidget(config, Component)


import EmbedComp from '@src/index.js'

import { name, version  } from '../../../package'
import { DefaultOptions } from './default-options'

const name    = '@scbd/map-nav'
const version = '0.0.31'
const i18n    = false
const options = {}
const config  = { i18n, version, name, options }

EmbedComp.build(config )

import   EmbedComponent   from '@scbd/self-embedding-component'
import { name, version  } from '../../../package'
import { DefaultOptions } from './default-options'

const options   = DefaultOptions.get()
const config    = { name, version, options }

EmbedComponent.build(config)
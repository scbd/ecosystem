import   EmbedComponent   from '@scbd/self-embedding-component'
import { name, version  } from '../../../package'
import { DefaultOptions } from '@modules/default-options'

const url       = '../dist/MapNav.umd.js'
const options   = DefaultOptions.get()
const config    = { name, version, options, url }

EmbedComponent.build(config)
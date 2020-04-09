import   EmbedComponent   from '@scbd/self-embedding-component'
import { name, version  } from '../package'
const initEu       = false
const euIdentifier = 'eur'

const options   = { initEu, euIdentifier }
const config    = { name, version, options }

EmbedComponent.build(config)
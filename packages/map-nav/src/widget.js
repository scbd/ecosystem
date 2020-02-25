import   EmbedComponent   from '@scbd/self-embedding-component'
import { name, version  } from '../package'

const options   = {}
const config    = { name, version, options }

EmbedComponent.build(config)
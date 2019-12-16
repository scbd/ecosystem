import   EmbedComponent   from '@scbd/self-embedding-component'
import { name, version  } from '../../package'
import { DefaultOptions } from './default-options'

const options   = DefaultOptions.get()
const config    = { name, version, options }

EmbedComponent.build(config)
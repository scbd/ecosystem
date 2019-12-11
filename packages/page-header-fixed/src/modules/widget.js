import   EmbedComponent   from '@scbd/self-embedding-component'
import { name, version  } from '../../package'
import { DefaultOptions } from './defaultOptions'

const options   = DefaultOptions.get()
const config    = { name, version, options }

EmbedComponent.build(config)
import   EmbedComponent  from '@scbd/self-embedding-component'
import { name, version } from '../../package'
import   defaultOpts     from './defaultOptions'

const options   = defaultOpts.get()
const config    = { name, version, options }

EmbedComponent.build(config)
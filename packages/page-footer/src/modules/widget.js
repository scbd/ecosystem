import   EmbedComponent            from '@scbd/self-embedding-component'
import { name          , version } from '../../package'
import   defaultOpts               from './defaultOptions'

const url       = '../PageFooter.umd.js'
const options   = defaultOpts.get()
const config    = { name, version, options, url }

EmbedComponent.build(config)
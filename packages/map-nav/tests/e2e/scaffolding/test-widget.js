import   EmbedComponent   from '@scbd/self-embedding-component'
import { name, version  } from '../../../package'


const url       = '../dist/MapNav.umd.js'
const options   = {}
const config    = { name, version, options, url }

EmbedComponent.build(config)
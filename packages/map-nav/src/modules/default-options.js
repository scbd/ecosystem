import   DOptions   from '@scbd/default-options'
import { name     } from '../../package'
import * as config  from '@modules/map-config'

const basePath      = '/countries/'
const search        = 'country'
const width         = 700
const height        = 500

const prod          = { basePath, search, width, height, config }
const dev           = { search, width, height }
const stg           = { search, width, height }

const environments  = { prod, stg, dev }
const validationMap = { search: String, height: Number, width: Number, config: Object }
const dOptions      = new DOptions({ environments, validationMap, name })

export const DefaultOptions = dOptions
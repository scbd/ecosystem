import   DOptions   from  '@scbd/default-options'
import { name     } from '../../package'

const basePath      = '/countries/'
const search        = '?country='

const prod          = { basePath, search }
const dev           = { search }
const stg           = { search }

const environments  = { prod, stg, dev }
const validationMap = { search: String }
const dOptions      = new DOptions({ environments, validationMap, name })


export const DefaultOptions = dOptions
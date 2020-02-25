import   DOptions      from '@scbd/default-options'
import { name     }    from '../../package'
import * as config     from './map/config'
import { getUnLocale } from './locale'

const basePath      = '/countries/'
const search        = 'country'
const locale        = getUnLocale()

const dev           = { basePath, search, config, locale, devMode: false, initControls: true, initEu: true,  euIdentifier: 'eu' }
const stg           = { ...dev }
const prod          = { ...stg }

const environments  = { prod, stg, dev }
const validationMap = { search: String,  config: Object, devMode: Boolean, locale: String, initControls: Boolean, initEu: Boolean, euIdentifier: String }
const dOptions      = new DOptions({ environments, validationMap, name })

export const DefaultOptions = dOptions
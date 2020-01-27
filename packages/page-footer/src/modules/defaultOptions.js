import   DOptions               from '@scbd/default-options'
import { name              }    from '../../package'
import   siteNavigationElements from '../footerSiteNavigationElements'

const validationMap = {
  host                    : String,
  siteNavigationElements  : Array,
  dapi                    : String,
  static                  : Boolean
}

const dev = {
  host       : 'https://www.cbddev.xyz',
  dapi       : 'https://dapi.cbd.int',
  static     : false,
  siteNavigationElements
}

const stg = { ...dev, ...{ host: 'https://www.staging.cbd.int' }  }

const prod = { ...dev, ...{ host: 'https://www.cbd.int' } }

const environments  = { prod, stg, dev }

const dOptions = new DOptions({ environments, validationMap, name })

export default dOptions
import   DOptions                 from '@scbd/default-options'
import { name                   } from '../../package'
import   mainSiteNavigationElement    from '../siteNavigationElements'

const validationMap = {
  host                 : String,
  siteNavigationElement: Object,
  dapi                 : String,
  static               : Boolean
}

const dev = {
  host                 : 'https://www.cbddev.xyz',
  dapi                 : 'https://dapi.cbd.int',
  static               : false,
  siteNavigationElement: mainSiteNavigationElement
}

const stg = { ...dev, ...{ host: 'https://www.staging.cbd.int' }  }

const prod = { ...dev, ...{ host: 'https://www.cbd.int' } }

const environments  = { prod, stg, dev }

const dOptions = new DOptions({ environments, validationMap, name })

export const DefaultOptions = dOptions
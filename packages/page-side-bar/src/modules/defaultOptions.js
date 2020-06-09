import { setDefaultOptions, getDefaultOptionsFunction }   from '@scbd/default-options'
import { name     } from '../../package'

const validationMap = {
  dapi               : String,
  isNuxt             : Boolean,
  base               : String,
  menuIdentifier     : String,
  canEdit            : Boolean,
  routeParamFunctions: Object,
  params             : Object
}

const dev = {
  dapi   : 'http://localhost:4000/local',
  isNuxt : true,
  base   : '/',
  canEdit: false
}

const stg = { ...dev }

const prod = { ...dev, ...{ dapi: 'https://dapi.cbd.int' } }

const environments  = { prod, stg, dev }

setDefaultOptions(name, { environments, validationMap, name })

export  default getDefaultOptionsFunction(name)
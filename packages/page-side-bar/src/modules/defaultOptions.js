import   DOptions   from '@scbd/default-options'
import { name     } from '../../package'

const validationMap = {
  dapi  : String,
  isNuxt: Boolean,
  base  : String
}

const dev = {
  dapi  : 'https://h550gxekak.execute-api.us-east-1.amazonaws.com/stg',
  isNuxt: true,
  base  : '/'
}

const stg = { ...dev }

const prod = { ...dev, ...{ dapi: 'https://dapi.cbd.int' } }

const environments  = { prod, stg, dev }

const dOptions = new DOptions({ environments, validationMap, name })

export  default dOptions
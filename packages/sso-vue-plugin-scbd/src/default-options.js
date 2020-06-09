import { setDefaultOptions, getDefaultOptionsFunction } from '@scbd/default-options'
import { name                                         } from '../package.json'

const allAccountUrls = [ 'https://accounts.cbddev.xyz', 'https://accounts.staging.cbd.int', 'https://accounts.cbd.int' ]

const admins      = [ ]
const _admins     = [ 'Administrator' ]

const govRoles    = [ ]
const _govRoles   = [ 'NFP-CBD', 'ChmNrNationalFocalPoint', 'ChmNrNationalAuthorizedUser' ]

const dev  = { accountsUrl: allAccountUrls[0], admins, _admins, govRoles, _govRoles, allAccountUrls }
const stg  = { ...dev, ...{ accountsUrl: allAccountUrls[1] } }
const prod = { ...stg, ...{ accountsUrl: allAccountUrls[2] } }


const environments  = { stg, dev, prod }
const validationMap = { allAccountUrls: Array, forceEnv: String, accountsUrl: String, admins: Array, _admins: Array, govRoles: Array, _govRoles: Array   }


setDefaultOptions({ environments, validationMap, name }, name)

export  default getDefaultOptionsFunction(name)
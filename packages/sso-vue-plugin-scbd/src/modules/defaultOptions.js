const admins      = [ ]
const _admins     = [ 'Administrator' ]

const govRoles    = [ ]
const _govRoles   = [ 'NFP-CBD', 'ChmNrNationalFocalPoint', 'ChmNrNationalAuthorizedUser' ]

const $store      = undefined
const login       = '/signin'
const logout      = '/logout'

const dev        = { logout, login, accountsUrl: 'https://accounts.cbddev.xyz', admins, _admins, $store, govRoles, _govRoles }
const stg        = { logout, login, accountsUrl: 'https://accounts.staging.cbd.int', admins, _admins, $store, govRoles, _govRoles }
const prod       = { logout, login, accountsUrl: 'https://accounts.cbd.int', admins, _admins, $store, govRoles, _govRoles }

const production  = prod
const development = dev
const staging     = stg

const ENVS        = { stg, dev, prod, production, development, staging }

function defaultOptions(vue, env){
  if(Object.keys(ENVS).includes(forceEnv)) return ENVS[forceEnv]

  return prod
}

export default defaultOptions

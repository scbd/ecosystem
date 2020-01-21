const admins      = [ ]
const _admins     = [ 'Administrator', 'ActionAdmin' ]
const govRoles    = [ ]
const _govRoles   = [ 'NFP-CBD', 'ChmNrNationalFocalPoint', 'ChmNrNationalAuthorizedUser' ]
const $store      = undefined
const login       = '/signin'
const logout      = '/logout'

const dev        = { logout, login, accountsUrl: 'https://accounts.cbddev.xyz', admins, _admins, $store, govRoles, _govRoles }
const stg        = { logout, login, accountsUrl: 'https://accounts.staging.cbd.int', admins, _admins, $store, govRoles, _govRoles }
const prod       = { logout, login, accountsUrl: 'https://accounts.cbd.int', admins, _admins, $store, govRoles, _govRoles }

const production =   prod
const ENVS       = { stg, dev, prod, production }

function defaultOptions(vue, env){
  if(isEnvSet(env)) return isEnvSet(env)

  return prod
}

export default defaultOptions

function isEnvSet(env){
  if(Object.keys(ENVS).includes(env)) return ENVS[env]
}
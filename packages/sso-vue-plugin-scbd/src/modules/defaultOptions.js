const admins      = [ ]
const _admins     = [ 'Administrator', 'ActionAdmin' ]
const govRoles    = [ ]
const _govRoles   = [ 'NFP-CBD', 'ChmNrNationalFocalPoint', 'ChmNrNationalAuthorizedUser']
const $store      = undefined

const dev        = { accountsUrl: 'https://accounts.cbddev.xyz', admins, _admins, $store, govRoles, _govRoles }
const stg        = { accountsUrl: 'https://accounts.staging.cbd.int', admins, _admins, $store, govRoles, _govRoles }
const prod       = { accountsUrl: 'https://accounts.cbd.int', admins, _admins, $store, govRoles, _govRoles }

const production =   prod
const ENVS       = { stg, dev, prod, production }

function defaultOptions(env){
  if(isEnvSet(env)) return isEnvSet(env)

  if(!window) return prod
  
  if(window.location.href.includes('staging.cbd.int'))  return stg
  if(window.location.href.includes('cbddev.xyz'))       return dev
  if(window.location.href.includes('www.cbd.int'))      return prod

  return stg
}

export default defaultOptions

function isEnvSet(env){
  if(Object.keys(ENVS).includes(env)) return ENVS[env]
}
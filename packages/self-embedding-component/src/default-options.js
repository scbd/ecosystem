import { setDefaultOptions, getDefaultOptionsFunction } from '@scbd/default-options'
import { name                                         } from '../package.json'

const cdn = 'https://cdn.cbd.int'

export default getDefaultOptionsFunction(name)

export const dependencyRef = {
  VUE          : { url: `${cdn}/vue/dist/vue.esm.browser.min.js`, name: 'Vue' },
  VUE_I18N     : { url: `${cdn}/vue-i18n/dist/vue-i18n.esm.browser.min.js`, name: 'VueI18n' },
  SCBD_SSO_AUTH: { url: `${cdn}/@scbd/sso-vue-plugin-scbd`, name: 'sso-vue-plugin-scbd' },
  legacy       : {
    VUE          : { url: `${cdn}/vue`, name: 'Vue' },
    VUE_I18N     : { url: `${cdn}/vue-i18n`, name: 'VueI18n' },
    SCBD_SSO_AUTH: { url: `${cdn}/@scbd/sso-vue-plugin-scbd/dist/legacy/umd/index.umd.js`, name: 'sso-vue-plugin-scbd' }
  }
}

const validationMap = {
  id           : String,
  appId        : String,
  name         : String,
  selfId       : String,
  compName     : String,
  version      : String,
  propsData    : Object,
  cdnUrl       : String,
  cdn          : String,
  dependencies : Object,
  dependencyRef: Object,
  selfUrl      : String
}

const dependencies = { all: [],  css: [], vuePlugins: [], legacy: [] }

const dev     = { dependencyRef,  cdn, dependencies  }
const stg     = { ...dev }
const prod    = { ...stg }

const environments  = { prod, stg, dev }

setDefaultOptions({ environments, validationMap, name })
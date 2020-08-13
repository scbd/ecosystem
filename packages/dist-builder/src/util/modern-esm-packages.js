const cdn = 'https://cdn.cbd.int'

export const modernEmsPackageCdnMap = {
  '@action-agenda/icons'          : `${cdn}/@action-agenda/icons/dist/browser/index.min.js`,
  '@action-agenda/view'           : `${cdn}/@action-agenda/view/dist/browser/index.min.js`,
  '@action-agenda/search'         : `${cdn}/@action-agenda/search/dist/browser/index.min.js`,
  '@scbd/net-speed'               : `${cdn}/@scbd/net-speed/dist/browser/index.min.js`,
  '@scbd/locale'                  : `${cdn}/@scbd/locale/dist/browser/index.min.js`,
  '@scbd/default-options'         : `${cdn}/@scbd/default-options/dist/browser/index.min.js`,
  '@scbd/am4-map-lib'             : `${cdn}/@scbd/am4-map-lib/dist/browser/index.min.js`,
  '@scbd/am4-map-base'            : `${cdn}/@scbd/am4-map-base/dist/browser/index.min.js`,
  '@scbd/self-embedding-component': `${cdn}/@scbd/self-embedding-component/dist/browser/index.min.js`,
  '@scbd/cached-apis'             : `${cdn}/@scbd/cached-apis/dist/browser/index.min.js`,
  '@scbd/load-http'               : `${cdn}/@scbd/load-http/dist/browser/index.min.js`,
  vue                             : `${cdn}/vue/dist/vue.esm.browser.min.js`,
  'vue-i18n'                      : `${cdn}/vue-i18n/dist/vue-i18n.esm.browser.min.js`,
  ky                              : `${cdn}/ky`
}

export const modernEmsPackages = Object.keys(modernEmsPackageCdnMap)

const unLocales = [ 'ar', 'en', 'es', 'fr', 'ru', 'zh' ]

export const scbdCMSLocale = () => {
  const pref = window.document.cookie.replace(/(?:(?:^|.*;\s*)Preferences\s*=\s*([^;]*).*$)|^.*$/, '$1')

  if(pref) return pref.replace('Locale=', '')

  return ''
}

export const html5Locale = () => {
  const htmlEl = document.querySelector('html')

  if(!htmlEl) return ''

  return htmlEl.getAttribute('lang') || ''
}

export const legacyHtmlLocale = () => {
  const metaEl = document.querySelector('meta[http-equiv=content-language]')
  
  if(!metaEl) return ''
  return metaEl.getAttribute('content') || ''
}

export const legacyBrowserLocale = () => (navigator.languages && navigator.languages.length) ? navigator.languages[0] : navigator.userLanguage || navigator.language || navigator.browserLanguage || ''

export const browserLocale = () => (new Intl.NumberFormat())? (new Intl.NumberFormat()).resolvedOptions().locale : ''

export const getUnLocale = () => {
  const locale = scbdCMSLocale() || html5Locale() || legacyHtmlLocale() || legacyBrowserLocale() || browserLocale()

  if(!locale) return 'en'

  for (const lang of unLocales){
    if(!locale.includes(lang)) continue

    return lang
  }
}
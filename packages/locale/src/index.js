const unLocales = [ 'ar', 'en', 'es', 'fr', 'ru', 'zh' ]

export const unLocalesSet = new Set(unLocales)

export const scbdCMSLocale = () => {
  if(typeof window === 'undefined') return ''

  const pref = window.document.cookie.replace(/(?:(?:^|.*;\s*)Preferences\s*=\s*([^;]*).*$)|^.*$/, '$1')

  if(pref) return (pref.replace('Locale=', ''))

  return ''
}

export const html5Locale = () => {
  if(typeof window === 'undefined') return ''

  const htmlEl = document.querySelector('html')

  if(!htmlEl) return ''

  return htmlEl.getAttribute('lang') || ''
}

export const legacyHtmlLocale = () => {
  if(typeof window === 'undefined' || typeof document === 'undefined') return ''

  const metaEl = document.querySelector('meta[http-equiv=content-language]')
  
  if(!metaEl) return ''
  return metaEl.getAttribute('content') || ''
}

export const legacyBrowserLocale = () => {
  if(typeof navigator === 'undefined') return ''
  return (navigator.languages && navigator.languages.length) ? navigator.languages[0] : navigator.userLanguage || navigator.language || navigator.browserLanguage || ''
}

export const browserLocale = () => {
  if(typeof Intl === 'undefined') return ''
  return (new Intl.NumberFormat())? (new Intl.NumberFormat()).resolvedOptions().locale : ''
}

export const get = () => {
  const locale = scbdCMSLocale() || html5Locale()|| legacyHtmlLocale() || legacyBrowserLocale() || browserLocale()

  return locale? locale.toLowerCase().slice(0, 2) : 'en'
}

export const getUN = () => {
  const locale = get()

  for (const lang of unLocales)
    if(locale.includes(lang))
      return lang

  return 'en'
}

export const getUnLocale = getUN
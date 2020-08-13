const themeConfig =  require('./configs/themeConfig')

module.exports = {
  base: '/ecosystem/',
  title: 'Ecosystem Monorepo for Components',
  description: 'Is a modular system of independent software components.',
  themeConfig,
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'en', // this will be set as the lang attribute on <html>
      title: 'Ecosystem Monorepo for Components',
      description: 'Is a modular system of independent software components.'
    }
  
  }
}

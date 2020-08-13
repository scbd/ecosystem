const nav = require('./nav')

const themeConfig = {
  nav,
  repo       : 'scbd/ecosystem',
  docsDir: 'docs',
  editLinks  : true,
  lastUpdated: 'Last Updated', // string | boolean
  
  locales: {
    '/guide': {
      label:        'English',
      selectText:   'Languages',
      editLinkText: 'Edit this page on GitHub',
      lastUpdated:  'Last Updated',
      title:        'Ecosystem Monorepo for Components',
      description:  'Is a modular system of independent software components which aim to be platform independent and functional.  Homed in a monorepo using shared dev resources and utilizing lerna\'s package linking for dependant packages',
    }



  }
}

module.exports = themeConfig

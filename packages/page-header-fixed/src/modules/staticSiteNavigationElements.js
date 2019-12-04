export default [
  {
    identifier: [ { name: 'drupalMenuName', value: 'information' } ],
    name      : 'Information',
    url       : 'https://www.cbd.int/information',
    position  : 1,
    hasPart   : [
      { name: 'Contact us',        url: 'https://www.cbd.int/contact',  position: 1 },
      { name: 'Terms of Use',      url: 'https://www.cbd.int/terms',     position: 2 },
      { name: 'Privacy Policy',    url: 'https://www.cbd.int/privacy',   position: 3 },
      { name: 'Credits',           url: 'https://www.cbd.int/credits',   position: 4 },
      { name: '© CBD Secretariat', url: 'https://www.cbd.int/copyright', position: 5 }
    ]
  },
  {
    identifier: [ { name: 'drupalMenuName', value: 'secretariat' } ],
    name      : 'About the Secretariat',
    url       : 'https://www.cbd.int/secretariat',
    position  : 2,
    hasPart   : [
      // { name:'About the Secretariat' , url:'https://www.cbd.int/secretariat/role' , position: 1 },
      { name: 'Staff',                          url: 'https://www.cbd.int/staff',                       position: 2 },
      { name: 'Museum of Nature and Culture',   url: 'https://www.cbd.int/museum',                      position: 3 },
      { name: 'Initiatives',                    url: 'https://www.cbd.int/secretariat/initiatives',     position: 4 },
      { name: 'Secretariat Documents',          url: 'https://www.cbd.int/secretariat/documents.shtml', position: 5 },
      { name: 'Employment Opportunities',       url: 'https://www.cbd.int/employment',                  position: 6 },
      { name: 'Doing Business with the CBD',    url: 'https://www.cbd.int/secretariat/business',        position: 7 }
    ]
  }
]
export default [
  {
    identifier: [
      { name: 'drupalMenuName', value: 'quick-links' }
    ],
    name    : 'Quick Links',
    position: 1,
    hasPart : [
      { name: 'Meetings and Events', url: 'https://www.cbd.int/meetings', position: 1  },
      { name: 'Notifications', url: 'https://www.cbd.int/notifications', position: 2  },
      { name: 'News Headlines', url: 'https://www.cbd.int/news', position: 3  },
      { name: 'Publications', url: 'https://www.cbd.int/publications', position: 4  },
      { name: 'CHM', url: 'https://chm.cbd.int', position: 5  },
      { name: 'ABSCH', url: 'https://chm.cbd.int', position: 6  },
      { name: 'BCH', url: 'https://bch.cbd.int', position: 7  },
      { name: 'Parties', url: 'https://www.cbd.int/parties', position: 8  },
      { name: 'Country Profiles', url: 'https://www.cbd.int/countries', position: 9  },
      { name: 'National Focal Points', url: 'https://www.cbd.int/nfp', position: 10 },
      { name: 'National Biodiversity Strategies and Action Plans (NBSAPs)', url: 'https://www.cbd.int/nbsap', position: 11 },
      { name: 'National Reports', url: 'https://www.cbd.int/reports', position: 12 },
      { name: 'Contributions', url: 'https://www.cbd.int/Contributions', position: 13 }
    ]
  },
  {
    identifier: [
      { name: 'drupalMenuName', value: 'topics' }
    ],
    name    : 'Topics',
    position: 2,
    hasPart : [
      { name: 'Children & Youth', url: 'https://www.cbd.int/youth', position: 1  },
      { name: 'Climate Change', url: 'https://www.cbd.int/climate', position: 2  },
      { name: 'Biodiversity for Development', url: 'https://www.cbd.int/development', position: 3  },
      { name: 'Impact Assessment', url: 'https://www.cbd.int/impact', position: 4  },
      { name: 'Local Authorities', url: 'https://www.cbd.int/authorities', position: 5  },
      { name: 'Gender & Biodiversity', url: 'https://www.cbd.int/gender', position: 6  },
      { name: 'Health & Biodiversity', url: 'https://www.cbd.int/health', position: 7  },
      { name: 'Technology Transfer', url: 'https://www.cbd.int/tech-transfer', position: 8  },
      { name: 'Dry and Sub-humid Lands Biodiversity', url: 'https://www.cbd.int/drylands', position: 9  },
      { name: 'Business & Biodiversity', url: 'https://www.cbd.int/business', position: 10 },
      { name: 'Tourism & Biodiversity', url: 'https://www.cbd.int/tourism', position: 11 },
      { name: 'Inland Water Biodiversity', url: 'https://www.cbd.int/waters', position: 12 }
    ]
  },
  {
    identifier: [
      { name: 'drupalMenuName', value: 'information' }
    ],
    name    : 'Information',
    url     : 'https://www.cbd.int/information',
    position: 3,
    hasPart : [
      { name: 'Contact us',        url: 'https://www.cbd.int/contact',  position: 1 },
      { name: 'Terms of Use',      url: 'https://www.cbd.int/terms',     position: 2 },
      { name: 'Privacy Policy',    url: 'https://www.cbd.int/privacy',   position: 3 },
      { name: 'Credits',           url: 'https://www.cbd.int/credits',   position: 4 },
      { name: '© CBD Secretariat', url: 'https://www.cbd.int/copyright', position: 5 }
    ]
  },
  {
    name    : 'A PART OF',
    position: 4,
    hasPart : [
      { name: 'United Nations', url: 'https://www.un.org', image: 'https://attachments.cbd.int/un-logo-white.svg, https://attachments.cbd.int/un-logo-white.png', position: 1 },
      { name: 'UN Environment Programme', url: 'https://www.unenvironment.org/', image: 'https://attachments.cbd.int/en/UNEP_2019_brand_white.svg', position: 2 }
    ]
  }
]
import EmbedComp from '@src/index.js'

const url = 'https://cdn.cbd.int/@scbd/map-nav'

const options = {
  url,
  compName: 'MapNav', //required
  selfId  : 'map-nav',
  i18n    : true,
  propsData: {host:'https://www.cbd.int', basePath:'/', search:'?country='}
}

EmbedComp.build(options)
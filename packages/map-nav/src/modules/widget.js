import   EmbedComponent   from '@scbd/self-embedding-component'
import { pascalCase     } from 'change-case'
import { name, version  } from '../../package'
import { DefaultOptions } from './default-options'

const url       = `https://cdn.cbd.int/${name}@${version}`
const shortName =  name.replace('@scbd/', '')
const options   = DefaultOptions.get()

const config = {
  url,
  compName : pascalCase(shortName), //required
  selfId   : shortName,
  i18n     : false,
  propsData: { options }
}

EmbedComponent.build(config)
import   EmbedComponent   from '@scbd/self-embedding-component'
import { pascalCase     } from 'change-case'
import { name           } from '../../package'
import { DefaultOptions } from './default-options'

const url       = `https://cdn.cbd.int/${name}`
const shortName =  name.replace('@scbd/', '')

const config = {
  url,
  compName : pascalCase(shortName), //required
  selfId   : shortName,
  i18n     : false,
  propsData: DefaultOptions.get()
}

EmbedComponent.build(config)
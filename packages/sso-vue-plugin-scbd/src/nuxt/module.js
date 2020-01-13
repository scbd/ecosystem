import path from 'path'

export default function () {
  const extendAxios = () => this.addPlugin(path.resolve(__dirname, 'axios-plugin.js'))

  this.addPlugin(path.resolve(__dirname, 'plugin.js'))

  this.nuxt.hook('modules:done', extendAxios)
}
const path = require('path')

class WebpackPluginPublicPath{
  apply(compiler){
    compiler.hooks.beforeRun.tap('WebpackPluginPublicPath', (c) => {
      const { name, version } = require(path.resolve(process.cwd(), './package')) // eslint-disable-line
      const { filename }      = c.options.output
      const   isWidget        = filename.includes('Widget')? 'widget/' : ''
      const   publicPath      = `https://cdn.cbd.int/${name}@${version}/dist/${isWidget}`

      c.options.output.publicPath = publicPath
    })
  }
}

module.exports = WebpackPluginPublicPath

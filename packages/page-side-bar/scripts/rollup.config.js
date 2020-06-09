import fs   from 'fs'
import path from 'path'

import   babel      from 'rollup-plugin-babel'
import   json       from 'rollup-plugin-json'
import   resolve    from 'rollup-plugin-node-resolve'
import   commonjs   from 'rollup-plugin-commonjs'
import   vue        from 'rollup-plugin-vue'
import   css        from 'rollup-plugin-css-only'
import { terser   } from 'rollup-plugin-terser'


const { banner, PKG_NAME, isComponent, PASCAL_PKG_NAME } = require('./util')

const BROWSERSLIST_ENV = process.env.BROWSERSLIST_ENV || 'production'
const MINIFY           = process.env.MINIFY

const base      = path.resolve(__dirname, '..')
const src       = path.resolve(base, 'src')
const dist      = path.resolve(base, 'dist')
const sourcemap = true

//const sourcemapPathTransform = (relativePath) => path.relative('dist', relativePath) not working ???

const input          = path.resolve(src, 'index.js')

const vueRollupPlugin    = vue({ css: false, template: { isProduction: true,  compileTemplate: true  } })
const vueRollupPluginSSR = vue({ css: false,  template: { isProduction: true, optimizeSSR: true, compileTemplate: true } })

const plugins        = [ json(), resolve({ external: [ '.js' ] }), commonjs(), css(), babel({ exclude: 'node_modules/**', runtimeHelpers: true }) ]
const format         = 'es'
const fileNamePreFix = isComponent? PASCAL_PKG_NAME : PKG_NAME

// Ensure dist directory exists
if (!fs.existsSync(dist)) fs.mkdirSync(dist)

// The base rollup configuration
const output = { format, banner, sourcemap }

const esmBrowser = { input, plugins: [ ...plugins, vueRollupPlugin ], output: { ...output } }
const esm        = { input, plugins: [ ...plugins, vueRollupPluginSSR ], output: { ...output } }

esmBrowser.output.file = path.resolve(dist, `${fileNamePreFix}.esm.browser.js`)
esm.output.file        = path.resolve(dist, `${fileNamePreFix}.esm.js`)

// builds
const modern = [ esmBrowser ]
const ssr    = [ esm ]

export default getBuild()

function getBuild(){
  let config = null

  if(BROWSERSLIST_ENV === 'modern') config = modern
  if(BROWSERSLIST_ENV === 'ssr')    config = ssr

  if(!config) throw new Error('BROWSERSLIST_ENV not set to modern or ssr')

  return MINIFY? minify(config) : config
}

function minify(config){
  config = config.filter((c) => !!c.output.file)
  config.forEach((c) => {
    const output = { comments: '/^!/' }

    c.output.file = c.output.file.replace(/\.js/g, '.min.js')
    c.plugins.push(terser({ output }))
  })
  return config
}
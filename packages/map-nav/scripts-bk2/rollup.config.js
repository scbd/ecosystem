import fs   from 'fs'
import path from 'path'

import   babel      from 'rollup-plugin-babel'
import   json       from 'rollup-plugin-json'
import   resolve    from 'rollup-plugin-node-resolve'
import   commonjs   from 'rollup-plugin-commonjs'
import   vue        from 'rollup-plugin-vue'
import   css        from 'rollup-plugin-css-only'
import { terser   } from 'rollup-plugin-terser'
import multi from '@rollup/plugin-multi-entry' //https://github.com/rollup/plugins/tree/master/packages/multi-entry
import strip from '@rollup/plugin-strip' //https://github.com/rollup/plugins/tree/master/packages/strip

import { sizeSnapshot } from 'rollup-plugin-size-snapshot'//https://github.com/TrySound/rollup-plugin-size-snapshot
import visualizer from 'rollup-plugin-visualizer' //https://github.com/btd/rollup-plugin-visualizer


const { external, banner, PKG_NAME, isComponent, PASCAL_PKG_NAME } = require('./util')

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

//resolve({ extensions: [ '.js' ] }),
const plugins        = [ json(),  commonjs(), css({ output: './dist/style.css' }), babel({ exclude: 'node_modules/**',  runtimeHelpers: true }), strip(), sizeSnapshot(), visualizer() ]
const format         = 'es'
const fileNamePreFix = isComponent? PASCAL_PKG_NAME : PKG_NAME

console.log('================', dist+'/browser')
// Ensure dist directory exists
if (!fs.existsSync(dist)) fs.mkdirSync(dist)
if (!fs.existsSync(dist+'/esm')) fs.mkdirSync(dist+'/esm')
if (!fs.existsSync(dist+'/browser')) fs.mkdirSync(dist+'/browser')

// The base rollup configuration
const output = { name: fileNamePreFix, format, banner, sourcemap, entryFileNames: `${fileNamePreFix}.js` }

console.log(external)

const esmBrowser = { input,  plugins: [ ...plugins, vueRollupPlugin ], output: { ...output } }
const esm        = { input,  plugins: [ ...plugins, vueRollupPluginSSR ], output: { ...output } }

esmBrowser.output.file = path.resolve(dist, 'browser/index.esm.browser.js')
//esmBrowser.output.dir = './dist'
esm.output.file = path.resolve(dist, 'esm/index.esm.js')
//esm.output.dir = './dist'

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
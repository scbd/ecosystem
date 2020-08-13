import { resolve     } from 'path'
import   nodeResolve   from '@rollup/plugin-node-resolve'
import   json          from '@rollup/plugin-json'
import   commonjs      from '@rollup/plugin-commonjs'
import   vue           from 'rollup-plugin-vue'
import   i18n          from '@intlify/rollup-plugin-vue-i18n'
import   css           from 'rollup-plugin-css-only'
import   alias         from '@rollup/plugin-alias'
import { terser      } from 'rollup-plugin-terser'

import strip      from '@rollup/plugin-strip'       //https://github.com/rollup/plugins/tree/master/packages/strip
import visualizer from 'rollup-plugin-visualizer' //https://github.com/btd/rollup-plugin-visualizer

import { getBanner                     } from './banner.js'
import { dist, src, pub, test, context } from './context.js'
import { fileNamePreFix, type          } from './pkg.js'
import { modernEmsPackages             } from './modern-esm-packages.js'
import { hasVue                       } from './files.js'
import { getConfig                     } from './config.js'

const BROWSERSLIST_ENV = process.env.BROWSERSLIST_ENV || 'legacy'
const MINIFY           = process.env.MINIFY
const WIDGET           = process.env.WIDGET || ''

const IS_MODERN        = BROWSERSLIST_ENV === 'modern'
const IS_SSR           = BROWSERSLIST_ENV === 'ssr'

const WIDGET_OUTPUT_PATH      = resolve(dist, './widget')
const TEST_WIDGET_OUTPUT_PATH = resolve(pub,  './widget')

const IS_TEST_WIDGET          = WIDGET && WIDGET  ===   'test'

const aliases = alias({  entries: [ { find: '@src', replacement: src } ] })

export const rollupConfig = async () => {
  const { esmBrowser, esm } = await makeBuilds()

  const config = IS_MODERN? [ esmBrowser ] : IS_SSR? [ esm ] : ''

  if(!config) throw new Error('BROWSERSLIST_ENV not set to modern or ssr')
  
  return MINIFY? minify(config) : config
}

async function makeBuilds(){ //eslint-disable-line
  const { modern, ssr } = await getConfig()
  const   banner        = await getBanner()
  const   external      = modernEmsPackages //tell resolve plugin not to bundle, they will be imported vie "import from 'url-directly'""

  // output options
  const sourcemap      = true
  const format         = 'es'
  const input          = getInputFilePath()

  const plugins        = [ json(), commonjs(), strip(), aliases ]
  const pluginsBrowser = [ ...plugins,  nodeResolve({ browser: true, mainFields: [ 'browser', 'module', 'main' ] }), visualizer({ filename: `stats-${IS_TEST_WIDGET?'test-widget-':''}${WIDGET?'widget-':''}browser.html`, gzipSize: true }) ]

  plugins.push(visualizer({ gzipSize: true }))
  
  const output = { name: fileNamePreFix, format, banner, sourcemap }

  if(await hasVue()){
    const { vueRollupPlugin, vueRollupPluginBrowser } = getVuePlugins(ssr)

    plugins.push(...vueRollupPlugin)
    pluginsBrowser.push(...vueRollupPluginBrowser)
  }

  const esmBrowser = { context, external, input,  plugins: pluginsBrowser, output: { ...output } }
  const esm        = { context, input, plugins, output: { ...output } }

  if(!modern?.output?.dir) esmBrowser.output.file = getBrowserOutputFilePath()
  if(!ssr?.output?.dir)    esm.output.file        = resolve(dist, 'esm/index.js')

  if(modern?.output?.dir)  esmBrowser.output.dir            = getBrowserOutputFilePath(modern)//resolve(context, modern.output.dir)
  if(modern?.output?.dir)  esmBrowser.output.entryFileNames = 'index.js'
  if(ssr?.output?.dir)     esm.output.dir                   = resolve(context, ssr.output.dir)

  return { esmBrowser, esm }
}

function minify(config){
  config.forEach((c) => {
    c.output.output = { comments: '/^!/' }

    if(c.output.dir){
      c.output.entryFileNames= 'index.min.js'
      c.output.chunkFileNames= '[name]-[hash].min.js'
    }
    
    if(c.output.file) c.output.file = c.output.file.replace(/\.js/g, '.min.js')

    c.plugins.push(terser())
  })
  return config
}

function getVuePlugins(ssr){
  const cssFn = ssr?.output?.dir? css({ output: resolve(context, `${ssr.output.dir}/index.css`) }): css()

  const vueRollupPluginBrowser    = [ css(), vue({  template: { isProduction: false,  compileTemplate: true }, customBlocks: [ 'i18n' ] }) ]
  const vueRollupPlugin           = [ cssFn, i18n.default(), vue({ css: false,  template: { isProduction: true, compileTemplate: true }, customBlocks: [ 'i18n' ] }) ]

  return { vueRollupPlugin, vueRollupPluginBrowser }
}

function getBrowserOutputFilePath(modern){
  const isDir = modern?.output?.dir
  
  if(!WIDGET) return isDir? resolve(context, modern.output.dir) : resolve(dist, 'browser/index.js')

  if(modern?.output?.dir) resolve(context, modern.output.dir)

  if(isDir) return IS_TEST_WIDGET? resolve(TEST_WIDGET_OUTPUT_PATH) : resolve(WIDGET_OUTPUT_PATH)

  return IS_TEST_WIDGET? resolve(TEST_WIDGET_OUTPUT_PATH, './index.js') : resolve(WIDGET_OUTPUT_PATH, './index.js')
}

function getInputFilePath(){
  if(!WIDGET) return (type ==='module')? resolve(src, 'index.mjs') : resolve(src, 'index.js')

  return IS_TEST_WIDGET? resolve(test, 'widget.js') : resolve(src, 'widget.js')
}

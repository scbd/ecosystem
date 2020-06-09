const { version, name, license, dependencies } = require('../package.json')
const { pascalCase, paramCase }                = require('change-case')

const path            = require('path')
const fs              = require('fs')
const isComponent     = fs.existsSync(path.resolve(__dirname, '../src/index.vue'))
const year            = new Date().getFullYear()
const PASCAL_PKG_NAME = pascalCase(name.replace('@scbd/', ''))
const PKG_NAME        = paramCase(name.replace('@scbd/', ''))
const NAME            = name
const fileNamePreFix  = isComponent? PASCAL_PKG_NAME : PKG_NAME
const external        = dependencies? Object.keys(dependencies) : dependencies

const banner = `/*!
 * ${NAME} ${version}
 *
 * @link www.cbd.int
 * @source https://github.com/scbd/ecosystem/packages/${PKG_NAME}
 * @copyright (c) 2019-${year} Secretariat of the Convention on Biological Diversity <it@cbd.int>
 * @license ${license}
 * https://github.com/scbd/ecosystem/blob/master/LICENCE
 */
`
const hasWindowSupport = typeof window !== 'undefined'

const vueUse = plugin => {
  if (hasWindowSupport && window.Vue) window.Vue.use(plugin)

  if (hasWindowSupport && plugin.NAME) window[plugin.NAME] = plugin
}

module.exports = { vueUse, hasWindowSupport, NAME, PASCAL_PKG_NAME, PKG_NAME, banner, external, isComponent, fileNamePreFix, cleanCss, fixSourceMaps }

const vDataRegex  = /(?<=\[data-v-)(.{8})(?=])/
const base        = path.resolve(__dirname, '../dist')

async function fixSourceMaps (){
  const dirFd = await fs.promises.opendir(base)

  for await (const dirent of dirFd){
    const fileName = path.resolve(base, dirent.name)
    const fileObj  = path.parse(fileName)

    if(fileObj.ext === '.map' || fileObj.ext === '.html') continue

    const brokenReference  = `# sourceMappingURL=${fileObj.base}.map`
    const replaceReference = `# sourceMappingURL=${PKG_NAME}/dist/${fileObj.base}.map`

    replaceInFile(fileName, brokenReference, replaceReference)
  }
}

async function cleanCss (){
  const hasCss = fs.existsSync(path.resolve(__dirname, `../dist/${fileNamePreFix}.css`))

  if(!hasCss) return
  
  const dir                 = await fs.promises.opendir(base)
  const cssScopeId          = getCssScopeId(`${base}/${fileNamePreFix}.css`)
  const cssScopeIdToReplace = getCssScopeId(`${base}/${fileNamePreFix}.esm.css`)

  await removeCssFiles()

  for await (const dirent of dir){
    const fileName = path.resolve(base, dirent.name)

    replaceInFile(fileName, cssScopeIdToReplace, cssScopeId)
  }
}


function getCssScopeId(fileName){
  const data = (fs.readFileSync(fileName)).toString()

  return data.match(vDataRegex)[0]
}

function replaceInFile(fileName, scopeId, scopeIdReplacement){
  const data         = (fs.readFileSync(fileName)).toString()
  const scopeIdRegex = new RegExp(`${scopeId}`, 'g')
  const newData      = data.replace(scopeIdRegex, scopeIdReplacement)

  return fs.writeFileSync(fileName, newData)
}

async function removeCssFiles(){
  const dir = await fs.promises.opendir(base)

  fs.renameSync(`${base}/${fileNamePreFix}.css`, `${base}/${fileNamePreFix}.tmp`)

  for await (const dirent of dir){
    const fileName = path.resolve(base, dirent.name)
    const { ext }  = path.parse(fileName)

    if(ext !== '.css') continue

    fs.unlinkSync(fileName)
  }

  fs.renameSync(`${base}/${fileNamePreFix}.tmp`, `${base}/${fileNamePreFix}.css`)
}
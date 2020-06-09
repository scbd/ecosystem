import fs         from 'fs'
import path       from 'path'
import readPkg    from 'read-pkg'
import changeCase from 'change-case'

import { context } from './context.js'

export const pkgPath = () => {
  const thePkgPath = path.join(context, 'package.json')

  if (!fs.existsSync(thePkgPath)) throw new Error(`does not exist: ${thePkgPath}`)
  
  return thePkgPath
}

export const pkg = (() => {
  const thePkg = readPkg.sync({ cwd: context })

  delete(thePkg._id)
  return thePkg
})()

export const writePkg = (pkgObj) => {
  fs.writeFileSync(pkgPath(), JSON.stringify(pkgObj))
}

export const { name, version, license, dependencies, type } = pkg

export const scopeLessName  = name.replace('@scbd/', '')
export const pascalPkgName  = changeCase.pascalCase(scopeLessName)
export const pkgName        = changeCase.paramCase(scopeLessName)
export const isComponent    = fs.existsSync(path.resolve(context, 'src/index.vue'))
export const fileNamePreFix = isComponent? pascalPkgName : pkgName
export const isModule       = type === 'module'

export const defaultPkg =
{
  version      : '0.0.1',
  private      : false,
  license      : 'MIT',
  author       : 'Secretariat of the Convention on Biological Diversity <it@cbd.int>',
  homepage     : `https://github.com/scbd/ecosystem/tree/master/packages/${pkgName}#readme`,
  readme       : `https://github.com/scbd/ecosystem/tree/master/packages/${pkgName}#readme`,
  main         : 'dist/esm/index.min.js',
  web          : 'dist/browser/index.min.js',
  umd          : 'dist/legacy/umd/index.umd.min.js',
  unpkg        : 'dist/browser/index.min.js',
  module       : 'dist/esm/index.min.js',
  'jsnext:main': 'dist/esm/index.min.js',
  src          : 'src/index.js',
  files        : [
    'dist/*',
    'src/*'
  ],
  browser: {
    './umd'    : 'dist/legacy/umd/index.umd.min.js',
    './browser': 'dist/browser/index.min.js',
    './'       : 'dist/browser/index.min.js'
  },
  exports: {
    '.': {
      require: 'dist/legacy/cjs/index.common.cjs',
      default: 'dist/esm/index.js'
    }
  },
  repository: {
    type     : 'git',
    url      : 'git+https://github.com/scbd/ecosystem.git',
    directory: `packages/${pkgName}`
  }
}
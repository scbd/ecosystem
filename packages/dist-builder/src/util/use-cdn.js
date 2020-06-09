import   path                                    from 'path'
import { forEachFileRecursive, replaceInFile, getJsFileObjs }   from './files.js'
import { modernEmsPackageCdnMap }                from './modern-esm-packages.js'
import { dist                   }                from './context.js'
import { name } from './pkg.js'


const pkgName = name
const dirPath = path.resolve(dist, 'browser')

export const useCdn = async () => {
  const callBack = embedCdnUrl
  const options  = { callBack }
  
  await forEachFileRecursive(dirPath, options)
  await fixEsmChunks()

  return
}

export const embedCdnUrl = (fileName) => {
  for (const name in modernEmsPackageCdnMap){
    const cdnUrl = modernEmsPackageCdnMap[name]

    replaceInFile(fileName, `'${name}`, `'${cdnUrl}`)
    replaceInFile(fileName, `"${name}`, `"${cdnUrl}`)
  }
}

async function fixEsmChunks(){
  const cdnUrl = 'https://cdn.cbd.int'
  const files  = await getJsFileObjs(dirPath)

  for (const { name, base } of files){
    if(name.includes('index') || name.includes('index')) continue

    if(name.includes('.min'))
      replaceInFile(path.resolve(dirPath, './index.min.js'), `./${base}`, `${cdnUrl}/${pkgName}/dist/browser/${base}`)
    else(name.includes('.min'))
    replaceInFile(path.resolve(dirPath, './index.js'), `./${base}`, `${cdnUrl}/${pkgName}/dist/browser/${base}`)
  }
}
const { getCssFiles, cleanCssFile } = require('./_utils')

const files = getCssFiles()




for (const [key, { fileObjPath, data } ] of Object.entries(files)) {
  console.info(`cleaning ${key}`)

  console.log(fileObjPath)
  cleanCssFile(fileObjPath, data )

  console.info(`${key} saved`)

  
}
                              




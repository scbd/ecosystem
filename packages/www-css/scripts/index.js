const { getCssFiles, cleanCssFile, saveImgFromBuiltDrupal } = require('./_utils')

const files = getCssFiles()




for (const [key, { path, data } ] of Object.entries(files)) {
  console.info(`cleaning ${key}`)

  cleanCssFile(path, data )

  console.info(`${key} saved`)
}

saveImgFromBuiltDrupal('000000', 'chevron-left.svg')
                              




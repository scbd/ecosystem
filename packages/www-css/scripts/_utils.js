const fs    = require('fs'   )
const https = require("https")

const clean = (fileData) => fileData
                              .replace(/..\/..\/images/gi, './images')

const getCssFiles = () => {

  const encoding        = 'utf8'
  const readFileOptions = { encoding }

  const makeFileObj = (path) =>  ({ path,  data: fs.readFileSync(path, readFileOptions) }) 

  const css     = makeFileObj('../dist/style.css')
  const cssMin  = makeFileObj('../dist/style.min.css')

  return { css, cssMin }
}

const cleanCssFile = ( path, data ) => fs.writeFileSync(path, clean(data))

const saveImgFromBuiltDrupal = ( color, name ) => {

  const file = fs.createWriteStream(`../dist/images/${name}`)
  const url  = `https://www.cbd.int/core/misc/icons/${color}/${name}`

  https.get(url , res => {
    const stream = res.pipe(file);
  
    stream.on('finish', () => console.log(`Finished saving ${name}`))
  })
}

module.exports = { getCssFiles, cleanCssFile, saveImgFromBuiltDrupal } 
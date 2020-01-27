const fs    = require('fs'   )
const https = require("https")
const path  = require('path')
const imagesDirPath = path.resolve(__dirname,`../dist/images` )

const clean = (fileData) => fileData
                              .replace(/\/images\/Rolling/g, './images/Rolling')
                              .replace(/\/..\/..\/images/gi, './images')
                              .replace(/..\/..\/images/gi, './images')
                              .replace(/..\/images/gi, './images')
                              .replace(/Rolling-1s-50px.svg"/gi,'Rolling-1s-50px.svg')
                              .replace(/..\/..\/..\/..\/misc\/icons\/000000/gi, './images')
                              .replace(/..\/..\/..\/..\/misc\/icons\/ffffff/gi, './images')


const findLocalImagePaths = (fileData) => (findImagePaths(fileData)
                                            .filter((url) => !url.includes('../../../../misc/icons/')))
                                            .map((url) => url.replace('"',''))

const findMissingImagePaths = (fileData) => findImagePaths(fileData)
                                            .filter((url) => url.includes('../../../../misc/icons/')) 
const findImagePaths = (fileData) => { 
  return (fileData.match(/url\((.*?)\)/gi))
                              .map((url) => url.replace('url(',''))
                              .filter((url) => !url.includes('"data:'))
                              .map((url) => url.replace(')',''))
                              .map((url) => url.replace('"',''))
                              .map((url) => url.replace('/../../images',''))
                              .map((url) => url.replace('../../images',''))
                              .map((url) => url.replace('../images',''))
                              .map((url) => url.replace('/images/Rolling-1s-50px.svg','/Rolling-1s-50px.svg'))                      
}

const veryifyImageExists = ({data})  => {
  (findLocalImagePaths(data)).forEach(img => { 
                          if(img && fs.existsSync(`dist/images${img}`)) return
                          console.error(`dist/images${img}`)
                          throw new Error(`${imagesDirPath}${img} : DOES NOT EXISTS`)
  });
}
const getCssFiles = () => {

  const encoding        = 'utf8'
  const readFileOptions = { encoding }

  const makeFileObj = (fileObjPath) =>  ({ fileObjPath,  data: fs.readFileSync(fileObjPath, readFileOptions) }) 

  const css     = makeFileObj('dist/style.css')
  const cssMin  = makeFileObj('dist/style.min.css')

  veryifyImageExists(css)
  veryifyImageExists(cssMin)
  saveAllMissingImages(css)
  saveAllMissingImages(cssMin)

  return { css, cssMin }
}

const cleanCssFile = ( cssFilePath, data ) => fs.writeFileSync(cssFilePath, clean(data))

const saveAllMissingImages = ({data}) => {
  findMissingImagePaths(data).forEach((img)=>{
  
    const imgData = extractColorAndName(img)

    saveImgFromBuiltDrupal(imgData)

  })
}
const saveImgFromBuiltDrupal = ( { color, name }) => {
  

  if(!fs.existsSync(imagesDirPath))
    fs.mkdirSync(imagesDirPath)
  

  const file = fs.createWriteStream(`${imagesDirPath}/${name}`)
  const url  = `https://www.cbd.int/core/misc/icons/${color}/${name}`

  if(fs.existsSync())
  https.get(url , res => {
    const stream = res.pipe(file);
  
    stream.on('finish', () => console.log(`Finished saving ${name}`))
  })
}

const extractColorAndName = (imgPath) => {
  imgPath = imgPath.replace('../../../../misc/icons/', '')

  const color = imgPath.substring(0,6)
  const name = imgPath.substring(7)

  return { color, name }
}
module.exports = { getCssFiles, cleanCssFile, saveImgFromBuiltDrupal, veryifyImageExists, findLocalImagePaths, findMissingImagePaths } 
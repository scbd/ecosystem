const fs        = require('fs');
const path      = require('path');
const $http     = require('ky-universal');

const writePath = path.resolve(__dirname, '../src/')
const dapi      = 'https://dapi.cbd.int';

(async()=>{

  const siteNavigationElements = stringifyToJsModule((await getMain())[0])

  fs.writeFileSync(`${writePath}/siteNavigationElements.js`, siteNavigationElements)

  console.log('Finished writing static menus')
})()

function stringifyToJsModule(data){
  return `module.exports = ${JSON.stringify(data)}`
}

function getMain(){
  return $http.get(`${dapi}/menus/main?postfix=WPH`).json()
    .then((d) =>  [ { identifier: [ { name: 'drupalMenuName', value: 'main' } ], name: 'main', position: 3, hasPart: d } ])
}

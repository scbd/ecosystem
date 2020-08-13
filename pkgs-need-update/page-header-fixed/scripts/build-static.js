const fs        = require('fs');
const path      = require('path');
const $http     = require('ky-universal');

const writePath = path.resolve(__dirname, '../src/')
const dapi      = 'https://dapi.cbd.int';

(async() => {
  const mainSNEs = stringifyToJsModule((await getMain())[0])
  const siteNavigationElements = stringifyToJsModule(await getTopMenu())

  fs.writeFileSync(`${writePath}/mainSNEs.js`, mainSNEs)
  fs.writeFileSync(`${writePath}/pageHeaderFixedSiteNavigationElements.js`, siteNavigationElements)

  console.log('Finnished writing static menus')
})()

function stringifyToJsModule(data){
  return `module.exports = ${JSON.stringify(data)} //eslint-disable-line \n // ${new Date()}`
}

function getMain(){
  return $http.get(`${dapi}/menus/main?postfix=WPH`).json()
    .then((d) =>  [ { identifier: [ { name: 'drupalMenuName', value: 'main' } ], name: 'main', position: 3, hasPart: d } ])
}

function getTopMenu(){
  return $http.get(`${dapi}/menus/topmenu?postfix=WPH`).json()
}
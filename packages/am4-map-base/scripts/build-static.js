const fs        = require('fs')
const path      = require('path')
const $http     = require('ky-universal')

const writePath = path.resolve(__dirname, '../src/config/');

(async() => {
  const parties = stringifyToJsModule((await getMain()))

  fs.writeFileSync(`${writePath}/parties.js`, parties)

  console.log('Finished writing static parties')
})()

function stringifyToJsModule(data){
  return `export const parties = ${JSON.stringify(data)}  //eslint-disable-line \n //${new Date()}`
}

function getMain(){
  return $http.get('https://api.cbd.int/api/v2016/countries')
    .then(res => res.json())
    .then(data => data.map(({ code }) => code))
}
const $http     = require('superagent')
const fs        = require('fs')
const path      = require('path')
const writePath = path.resolve(__dirname, '../src/')

main()
async function main(){
  const promise   = $http.get('https://api.cbd.int/api/v2015/countries').then(({ body }) => body)
  const countries = stringifyToJsModule(await promise)

  fs.writeFileSync(`${writePath}/countries-data.js`, countries);
}

function stringifyToJsModule(data){
  return `module.exports = ${JSON.stringify(data)} //eslint-disable-line \n // ${new Date()}`
}



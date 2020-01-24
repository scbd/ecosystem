const fs = require('fs')
const path = require('path')

const packagesPath = path.resolve(__dirname, '../packages/')
const esLintConfigFile = 'module.exports = ' + JSON.stringify(require('../.eslintrc'))
const packageNames = readPackageNames()

for (const packageName of packageNames) {
  fs.writeFileSync(`${packagesPath}/${packageName}/.eslintrc.js`, esLintConfigFile)
}

console.log('esLintConfigFile',packageNames)


function readPackageNames(){
  return fs.readdirSync(packagesPath)
  .filter((name) => name !== '.DS_Store' )
}
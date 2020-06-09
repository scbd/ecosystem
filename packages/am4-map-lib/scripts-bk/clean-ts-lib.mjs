import path from 'path'
import { Util } from '@scbd/dist-builder'

const { forEachFileRecursive, replaceInFile } = Util

main()

async function main(){
  await cleanTsLIb()
}

function cleanTsLIb(){
  const callBack = updateFilesTsLib
  const options = { callBack }


  return forEachFileRecursive(path.resolve(Util.context, 'src/amcharts4'), options)
}

function updateFilesTsLib(fileName){
  replaceInFile(fileName, '"tslib"', '"tslib/tslib.es6.js"')
}
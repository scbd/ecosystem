import path from 'path'

export const context   = getContext()
export const src       = path.resolve(context, 'src')
export const dist      = path.resolve(context, 'dist')
export const pub       = path.resolve(context, 'public')
export const test      = path.resolve(context, 'tests/e2e/scaffolding')

function getContext(){
  const cxt = process.env.SCBD_DIST_BUILDER_CONTEXT || process.argv[1].replace('/node_modules/.bin/scbd-dist-builder', '')

  if(cxt.includes('/scripts/')){
    const index = cxt.indexOf('/scripts/')

    return cxt.slice(0, index)
  }
  return cxt
}
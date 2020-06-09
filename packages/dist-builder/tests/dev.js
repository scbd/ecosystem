import { spawn } from 'child_process'

const { DEBUG  } =   process.env
const   options  = { shell: true }

if(DEBUG) options.stdio = 'inherit'

export const start = () => spawn('nodemon', ['src/index.js', '--watch', 'src/'], )

export const onEvent = (event) => {
  const { type } = event

  if(type === 'start') return console.log('nodemon started');

  if(type === 'crash') return console.log('script crashed for some reason')

  return console.error(event)
}

const devServer = start()

devServer.on('message', onEvent)
devServer.on('error', (e) => console.error(e))
devServer.on('exit', () => console.log('nodemon quit'))
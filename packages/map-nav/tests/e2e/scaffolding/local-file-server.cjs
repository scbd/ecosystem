const   express   = require('express')
const { resolve } = require('path'   )
const   app       = express(         )
const   cors      = require('cors'   )

app.use(cors())
app.use(express.static(resolve(__dirname, '../../../public/widget')))

const server = app.listen(8088)

console.log('local file server listening port: 8088 serving the public/widget/ dir as root')
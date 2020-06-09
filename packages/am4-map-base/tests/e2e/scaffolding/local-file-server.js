const express = require('express')
const { resolve } = require('path')
const app  = express()
const cors = require('cors'   )

app.use(cors())
app.use(express.static(resolve(__dirname, '../../../dist')))

const server = app.listen(8080)

console.log('local file server listening port: 8080 serving the dist dir as root')
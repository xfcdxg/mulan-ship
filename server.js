const express = require('express')

const server = express()

server.get('/ttt', (req, res) => {
  res.json({ test: 1 })
})

server.listen('8099', () => {
  console.log('server run at 8099')
})

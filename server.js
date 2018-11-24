const next = require('next')
const compression = require('compression')
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const path = require('path')
const express = require('express')
const server = express()

server.use(compression())

app.prepare().then(() => {
  server.get('/sw.js', (req, res) => {
    app.serveStatic(req, res, path.resolve('./static/sw.js'))
  })
  server.get('/robots.txt', (req, res) => {
    res.sendFile(path.join(__dirname, '/static', 'robots.txt'))
  })
  server.get('*', (req, res) => {
    return handle(req, res)
  })  
  server.listen(port, () => console.log('server is running on port: ', port))
})
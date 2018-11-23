const next = require('next')
const compression = require('compression')
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const restify = require('restify')
const server = restify.createServer()

server.use(compression())

app.prepare().then(() => {
  server.get('*', (req, res) => {
    return handle(req, res)
  })
  server.listen(port, () => console.log('server is running on port: ', port))
})
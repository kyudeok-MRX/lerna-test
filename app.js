const history = require('connect-history-api-fallback')
const express = require('express')
const http = require('http')
const path = require('path')

const port = process.env.PORT || 4000
const app = express()
const server = http.createServer(app)
const plugins = ['core', 'ui']

app.disable('x-powered-by')
app.use(
  history({
    verbose: true,
    rewrites: [
      ...plugins.map(name => ({
        from: new RegExp(`/plugins/${name}`),
        to: `/plugins/${name}`
      })),
      { from: /\//, to: '/' },
    ],
  })
)
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/', (_, res) => {
  res.render('index')
})
app.get('/plugins/:name', (req, res) => {
  try {
    const pluginName = req.params.name

    res.sendFile(
      path.join(__dirname, `packages/${pluginName}/dist/${pluginName}.umd.cjs`)
    )
  } catch (err) {
    console.log(err)
  }
})

app.use((_, res) => {
  res.status(404)
  res.send('404 Not Found')
})

server
  .listen(port)
  .on('error', err => console.warn(err))
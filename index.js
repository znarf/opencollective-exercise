const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const search = require('./search');

app.prepare().then(() => {
  const server = express()

  // Make sure the IP address is properly detected by Express
  server.set('trust proxy', 'loopback, uniquelocal');

  server.get('/api/search', (req, res) => {
    const q = req.query.q;
    search(q)
      .then(results => {
        res.send(results);
      })
      .catch(err => {
        console.error(err);
        res.send({});
      })
  })

  server.get('*', (req, res) => {
    handle(req, res)
  })

  server.listen(3000)
})

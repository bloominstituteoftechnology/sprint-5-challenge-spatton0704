const express = require('express')
const path = require('path')
const { learners, mentors } = require('./data')

const delay = 500
const server = express()
const port = process.env.PORT || 3003

server.use(express.json())
server.use(express.static(path.join(__dirname, '../frontend')))

server.get('/api/mentors', async (req, res, next) => {
  try {
    setTimeout(() => {
      res.json(mentors)
    }, delay);
  } catch (err) {
    next(err)
  }
})
server.get('/api/learners', async (req, res, next) => {
  try {
    setTimeout(() => {
      res.json(learners)
    }, delay)
  } catch (err) {
    next(err)
  }
})

// SPA
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'))
})
// 404
server.use((req, res) => {
  res.status(404).json({
    message: `Endpoint [${req.method}] ${req.originalUrl} does not exist`,
  })
})
// ERR
server.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  })
})

server.listen(port, () => {
  console.log(`
-------------------------------------------------------------------------
See YOUR PROJECT in the browser, navigating to --> http://localhost:3003

See the live mock navigating to --> https://w-s5-challenge.herokuapp.com/
-------------------------------------------------------------------------
`)
})

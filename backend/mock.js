const { rest } = require('msw')
const { setupServer } = require('msw/node')
const { learners, mentors } = require('./data')

function getLearners(req, res, ctx) {
  return res(
    ctx.json(learners),
  )
}

function getMentors(req, res, ctx) {
  return res(
    ctx.json(mentors),
  )
}

const handlers = [
  rest.get('http://localhost:3003/api/learners', getLearners),
  rest.get('http://localhost:3003/api/mentors', getMentors),
  rest.get('/api/learners', getLearners),
  rest.get('/api/mentors', getMentors),
]

module.exports = {
  server: setupServer(...handlers),
}

var test = require('ava')
var request = require('supertest')

var createServer = require('../../server/server')
var setupDb = require('../setup-db')

setupDb(test,createServer)

test.cb('GET /schools returns 4 schools', t => {
  request(t.context.app)
    .get('/schools')
    .expect(200)
    .end((err,res) => {
      t.ifError(err)
      t.is(res.body.schools.length, 4)
      t.is(res.body.schools[3].name, 'Adventure School')
      t.end()
    })
})

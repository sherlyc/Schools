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


test.cb('GET school by ID returns a school correctly', t => {
    request(t.context.app)
        .get('/schools/4')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
            t.ifError(err)
            t.is(res.body.school.name, 'Adventure School')
            t.end()
        })
})

test.cb('Add school is working?', t=> {
    request(t.context.app)
        .post('/schools/add')
        .send({name: 'High School'})
        .expect(201)
        .end((err, res) => {
            t.ifError(err)
            t.context.db("schools")
            .then((schools) => {
                t.is(schools.length, 5)
                t.end()
      })
         })
})

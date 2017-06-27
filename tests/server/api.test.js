import test from 'ava'
import request from 'supertest'
import db from '../../server/db'

import createServer from '../../server/server'
import setupDb from '../setup-db'

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

test.cb('POST /schools/add', t=> {
    request(t.context.app)
        .post('/schools/add')
        .send({name: 'High School'})
        .expect(201)
        .end((err, res) => {
            t.ifError(err)
            t.context.db("schools")
            .then((schools) => {
                t.is(res.statusCode, 201)
                t.end()
            })
         })
})

test.cb("DELETE /schools/remove/1" , t=> {
    request(t.context.app)
        .delete('/schools/remove/1')
        .send({name: 'Avondale School'})
        .expect(204)
        .end((err, res) => {
            t.ifError(err)
            t.context.db("schools")
            .then((schools) => {
                t.is(schools.length, 4)
                t.end()
            })
        })
})

//edit

//remove

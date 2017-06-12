
var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', function (req, res) {
  db.getSchools(req.app.get('connection'))
    .then(function (schools) {
      res.json({ schools: schools })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/add', function (req, res) {
    db.addSchool(req.body, req.app.get('connection'))
    res.sendStatus(201)
})

router.put('/edit/:id', function (req, res) {
    db.updateSchool(req.params.id, req.body, req.app.get('connection'))
    res.sendStatus(202)
})

router.get('/:id', function (req, res) {
    db.getSchool(req.params.id, req.app.get('connection'))
    .then(function (school){
        res.json({school: school})
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})


module.exports = router

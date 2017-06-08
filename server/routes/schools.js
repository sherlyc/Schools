
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
  //remove all console logs when you commit
    console.log(req.body)
    db.addSchool(req.body, req.app.get('connection'))
    res.sendStatus(201)
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

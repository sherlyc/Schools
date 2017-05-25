
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

router.post('/', function (req, res) {
    db.addSchool(req.body, req.app.get('connection'))
    res.sendStatus(200)
})


module.exports = router

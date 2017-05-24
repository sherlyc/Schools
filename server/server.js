var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')

var schools = require('./routes/schools')
var app = express()

// Middleware
app.use(bodyParser.json())
app.use(express.static(__dirname + '/../public'))
app.use(cors({origin: '*'}))

// Routes
app.use('/schools', schools)


module.exports = (connection) => {
  app.set('connection', connection)
  return app
}

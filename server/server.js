var path = require('path')

var express = require('express')
var bodyParser = require('body-parser')

var index = require('./routes/index')
var app = express()

// Middleware


app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))

// Routes

app.use('/', index)

module.exports = (connection) => {
  app.set('connection', connection)
  return app
}

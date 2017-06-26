var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var auth = require("./auth.js")();
var schools = require('./routes/schools')
var server = express()

// Middleware
server.use(bodyParser.json())
server.use(auth.initialize());
server.use(express.static(__dirname + '/../public'))
server.use(cors({origin: '*'}))

// Routes
server.use('/schools', schools)


module.exports = server

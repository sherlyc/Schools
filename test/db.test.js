var test = require('ava')

var configureDatabase = require('./helpers/database-config')
configureDatabase(test)

var db = require('../server/db')

test('getSchools get all schools', function (t) {
  var expected = 4
  return db.getSchools(t.context.connection)
    .then(function (result) {
      var actual = result.length
      t.is(expected, actual, "Get all schools")
    })
})

test('getSchool gets a single school', function (t) {
  var expected = 'Adventure'
  return db.getSchool(4, t.context.connection)
    .then(function (result) {
      var actual = result[0].name
      t.is(expected, actual, "Get a school")
    })
})

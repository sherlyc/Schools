var test = require('ava')
var db = require('../../server/db')
var configureDatabase = require('./helpers/database-config')
configureDatabase(test)

test('getSchools get all schools', function (t) {
  var expected = 4
  return db.getSchools(t.context.connection)
    .then(function (result) {
      var actual = result.length
      t.is(expected, actual, "Get all schools")
    })
})

test('getSchool gets a single school', function (t) {
  var expected = 'Adventure School'
  return db.getSchool(4, t.context.connection)
    .then(function (result) {
      var actual = result.name
      t.is(expected, actual, "Get a school")
    })
})

test('insert school returns 5 schools', function (t) {
    var expected = 5
    var data = {name: 'Hataitai School', schoolType: 'Full Primary School (Year 1-8)', authority: 'State', Decile:'10', url: 'http://www.select.com'}
    return db.addSchool(data, t.context.connection)
        .then(function (result) {
           return db.getSchools(t.context.connection).then(function (results){
           var actual = results.length
           t.is(actual, expected)
        })
    })
})

test('update school works correctly', function (t) {
    var expected = 'Fashion School'
    var data = {name: 'Fashion School', schoolType: 'Full Primary (Year 1-8)', authority: 'State', Decile:'8', url: 'http://www.select.com', suburb: 'Kelburn' , latitude: 41 , longitude: 41}
    return db.transactUpdate(4, data, t.context.connection)
        .then(function (result) {
            return db.getSchool(4, t.context.connection)
                .then(function (school){
                    var actual = school.name
                    t.is(actual, expected)
                })
        })
})

test('delete school removed a school from database', function (t) {
    var expected = 3
    return db.delSchool(1, t.context.connection)
        .then(function (result) {
            return db.getSchools(t.context.connection)
                .then(function (schools) {
                    var actual = schools.length
                    t.is(actual, expected)
                })
        })
})

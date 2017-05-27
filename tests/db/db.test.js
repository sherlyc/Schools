var test = require('ava')
var db = require('../../server/db')
var dbConfig = require('../dbConfig.js')

dbConfig(test)


test('getSchools get all schools', function (t) {
  var expected = 4
  return db.getSchools(t.context.db)
    .then(function (result) {
      var actual = result.length
      t.is(expected, actual, "Get all schools")
    })
})

test('getSchool gets a single school', function (t) {
  var expected = 'Adventure School'
  return db.getSchool(4, t.context.db)
    .then(function (result) {
      var actual = result[0].name
      t.is(expected, actual, "Get a school")
    })
})

test('insert school returns 5 schools', function (t) {
    var expected = 5
    var data = {name: 'Hataitai School', schoolType: 'Full Primary School (Year 1-8)', authority: 'State', Decile:'10'}
    return db.addSchool(data, t.context.db)
        .then(function (result) {
           return db.getSchools(t.context.db).then(function (results){
           var actual = results.length
           t.is(actual, expected)
        })
    })
})

test('update school works correctly', function (t) {
    var expected = 'Fashion School'
    var data = {name: 'Fashion School'}
    return db.updateSchool(4, data, t.context.db)
        .then(function (result) {
            return db.getSchool(4, t.context.db)
                .then(function (school){
                    var actual = school[0].name
                    t.is(actual, expected)
                })
        })
})

test('delete school removed a school from database', function (t) {
    var expected = 3
    return db.delSchool(1, t.context.db)
        .then(function (result) {
            return db.getSchools(t.context.db)
                .then(function (schools) {
                    var actual = schools.length
                    t.is(actual, expected)
                })
        })
})

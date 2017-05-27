import request from 'superagent'

var schoolUrl = 'http://localhost:3000/schools'

module.exports = {
  getSchools,
  getSchool
}

function getSchools (callback) {
  request
    .get(schoolUrl)
    .end(function (err, res) {
      if (err) {
        callback(err)
      } else {
        callback(null, res.body.schools)
      }
    })
}


function addSchool (school, callback) {
  request
    .post(schoolUrl)
    .send(school)
    .end(function (err, res) {
      if (err) {
        callback(err)
      } else {
        callback(null)
      }
    })
}

function getSchool (id, callback) {
    request
    .get(schoolUrl + '/' + id)
    .end(function (err, res) {
        if (err) {
            callback(err)
        } else {
            callback(null, res.body.school)
        }
    })
}

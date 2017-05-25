import request from 'superagent'

var schoolUrl = 'http://localhost:3000/schools'

module.exports = {
  getSchools
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

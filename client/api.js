import request from 'superagent'


module.exports = {
  getSchools,
  getSchool
}

function getSchools (callback) {
  request
    .get(/schools)
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
    .post(/schools/add)
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

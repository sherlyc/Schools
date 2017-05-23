import request from 'superagent'

var schoolUrl = 'http://localhost:3500/schools'

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
        callback(null, res.body)
      }
    })
}

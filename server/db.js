var env = process.env['NODE_ENV'] || 'development'
var config = require('../knexfile.js')[env]
var knex = require('knex')(config)


module.exports = {
    getSchools,
    getSchool
}

function getSchools () {
    return knex('schools').select()
}

function getSchool (id) {
    return knex('schools').where('id', id)
}

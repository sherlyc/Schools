module.exports = {
    getSchools,
    getSchool,
    addSchool
}

function getSchools (knex) {
    return knex('schools').select()
}

function getSchool (id, knex) {
    return knex('schools').where('id', id)
}

function addSchool (data, knex) {
    return knex('schools').insert({name: data.name, schoolType: data.schoolType, authority: data.authority, decile: data.decile })
}

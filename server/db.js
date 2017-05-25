module.exports = {
    getSchools,
    getSchool,
    addSchool,
    updateSchool,
    delSchool
}

function getSchools (knex) {
    return knex('schools').select()
}

function getSchool (id, knex) {
    return knex('schools')
           .join('profiles', 'schools.id', '=' , 'profiles.school_id')
           .join('locations', 'schools.id', '=', 'locations.school_id')
           .where('schools.id', id)
}

function addSchool (data, knex) {
    return knex('schools').insert({name: data.name, schoolType: data.schoolType, authority: data.authority, decile: data.decile })
}

function updateSchool (id, data, knex) {
    return knex('schools').where('id', id).update({name: data.name, schoolType: data.schoolType, authority: data.authority, decile: data.decile})
}

function delSchool (id, knex) {
    return knex('schools').where('id', id).del()
}

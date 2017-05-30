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
           .first()
}

function addSchool (data, knex) {
    console.log("dbcalled")
    return knex('schools').insert({name: data.name, schoolType: data.schoolType, authority: data.authority, gender: data.gender, decile: data.decile})
        .then((result) =>{
            console.log(result[0])
            return knex('profiles').insert({address: data.address , email: data.email , url: data.url , school_id: result[0]})
        })
        .then((result) =>{
            console.log(result[0])
            return knex('locations').insert({suburb: data.suburb , latitude: data.latitude , longitude: data.longitude , school_id: result[0]})
         })


}

function updateSchool (id, data, knex) {
    return knex('schools').where('id', id).update({name: data.name, schoolType: data.schoolType, authority: data.authority, decile: data.decile})
}

function delSchool (id, knex) {
    return knex('schools').where('id', id).del()
}

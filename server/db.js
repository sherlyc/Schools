module.exports = {
    getSchools,
    getSchool,
    addSchool,
    updateSchool,
    delSchool,
    transactUpdate
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
    return knex('schools').insert({name: data.name, schoolType: data.schoolType, authority: data.authority, gender: data.gender, decile: data.decile})
      .returning('id')
        .then((result) =>{
            return knex('profiles').insert({address: data.address , email: data.email , url: data.url , school_id: result[0]})
            .returning('id')
        })
        .then((result) =>{
            return knex('locations').insert({suburb: data.suburb , latitude: data.latitude , longitude: data.longitude , school_id: result[0]})
        })
}

function updateSchool (id, data, knex) {
    return knex('schools').where('id', id).update({name: data.name, schoolType: data.schoolType, authority: data.authority, decile: data.decile})
        .then((result) => {
            return knex('profiles').where('school_id', id).update({address: data.address , email: data.email , url: data.url})
        })
        .then((result) => {
            return knex('locations').where('school_id', id).update({suburb: data.suburb , latitude: data.latitude , longitude: data.longitude})
        })
}

function transactUpdate (id, data, knex) {
    return knex.transaction(function(t) {
       return knex('schools')
       .transacting(t)
       .where('id', id)
       .update({name: data.name, schoolType: data.schoolType, authority: data.authority, decile: data.decile})
       .then(function() {
            return knex('profiles')
               .transacting(t)
               .where('school_id', id)
               .update({address: data.address , email: data.email , url: data.url});
       })
       .then(function() {
            return knex('locations')
               .transacting(t)
               .where('school_id', id)
               .update({suburb: data.suburb , latitude: data.latitude , longitude: data.longitude});
       })
       .then(t.commit)
       .catch(function(e) {
            t.rollback();
            throw e;
       })
    })

}


function delSchool (id, knex) {
    return knex('schools').where('id', id).del()
}

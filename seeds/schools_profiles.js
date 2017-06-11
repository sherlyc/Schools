
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('profiles').del()
         .then(function () {
            knex('locations').del()
        })
        .then(function () {
            knex('schools').del()
        })

        .then(function () {
            // Inserts seed entries
            return Promise.all([
                knex('schools').insert({name: "Wellington Girl's College", schoolType: 'Secondary (Year 9-15)', authority: 'State', gender: 'Girls School', decile: '10'}),
                knex('schools').insert({name: "St Patrick's College", schoolType: 'Secondary (Year 9-15)', authority: 'State', gender: 'Boys School', decile: '8'}),
                knex('schools').insert({name: "Kelburn Normal School", schoolType: 'Full Primary (Year 1-8)', authority: 'State', gender: 'Co-Educational', decile: '10'}),
                knex('schools').insert({name: "Adventure School", schoolType: 'Full Primary (Year 1-8)', authority: 'State', gender: 'Co-Educational', decile: '10'}),
                knex('profiles').insert({address: "Pipitea Street, Thorndon", email: "ann.gilbert@wgc.school.nz", url: "http://www.wgc.school.nz", school_id:'1'}),
                knex('profiles').insert({address: "581 Evans Bay Parade, Kilbirnie", email: "admin@stpats.school.nz", url: "http://www.stpats.school.nz/", school_id:'2'}),
                knex('profiles').insert({address: "Kowhai Road, Kelburn", email: "admin@kelburnnormal.school.nz", url: "http://www.kelburnnormal.school.nz/", school_id:'3'}),
                knex('profiles').insert({address: "Longitude Place, Porirua", email: "office@adventure.school.nz", url: "http://www.adventure.school.nz", school_id:'4'}),
                knex('locations').insert({latitude: "-41.275422", longitude: "174.780672", suburb: "Thorndon", school_id:'1'}),
                knex('locations').insert({latitude: "-41.313832", longitude: "174.795985", suburb: "Kilbirnie", school_id:'2'}),
                knex('locations').insert({latitude: "-41.287277", longitude: "174.761649", suburb: "Kelburn", school_id:'3'}),
                knex('locations').insert({latitude: "-41.120037", longitude: "174.890083", suburb: "Whitby", school_id:'4'})

              ]);
          });
};

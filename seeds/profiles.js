
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(function () {
      // Inserts seed entries
      return Promise.all([
        knex('profiles').insert({address: "Pipitea Street, Thorndon", email: "ann.gilbert@wgc.school.nz", url: "http://www.wgc.school.nz", school_id:'1'}),
        knex('profiles').insert({address: "581 Evans Bay Parade, Kilbirnie", email: "admin@stpats.school.nz", url: "http://www.stpats.school.nz/", school_id:'2'}),
        knex('profiles').insert({address: "Kowhai Road, Kelburn", email: "admin@kelburnnormal.school.nz", url: "http://www.kelburnnormal.school.nz/", school_id:'3'}),
        knex('profiles').insert({address: "Longitude Place, Porirua", email: "office@adventure.school.nz", url: "http://www.adventure.school.nz", school_id:'4'})
      ]);
    });
};

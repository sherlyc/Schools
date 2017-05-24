
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('locations').del()
        .then(function () {
            // Inserts seed entries
            return Promise.all([
                knex('locations').insert({latitude: "-41.275422", longitude: "174.780672", suburb: "Thorndon", school_id:'1'}),
                knex('locations').insert({latitude: "-41.313832", longitude: "174.795985", suburb: "Kilbirnie", school_id:'2'}),
                knex('locations').insert({latitude: "-41.287277", longitude: "174.761649", suburb: "Kelburn", school_id:'3'}),
                knex('locations').insert({latitude: "-41.120037", longitude: "174.890083", suburb: "Whitby", school_id:'4'})
              ]);
          });
};

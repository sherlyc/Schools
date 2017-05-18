
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('schools').del()
    .then(function () {
      // Inserts seed entries
      return Promise.all([
        knex('schools').insert({name: "Wellington Girl's College", schoolType: 'Secondary (Year 9-15)', authority: 'State', gender: 'Girls School', decile: '10'}),
        knex('schools').insert({name: "St Patrick's College", schoolType: 'Secondary (Year 9-15)', authority: 'State', gender: 'Boys School', decile: '8'}),
        knex('schools').insert({name: "Kelburn Normal School", schoolType: 'Full Primary School (Year 1-8)', authority: 'State', gender: 'Co-Educational', decile: '10'}),
        knex('schools').insert({name: "Adventure", schoolType: 'Full Primary School (Year 1-8)', authority: 'State', gender: 'Co-Educational', decile: '10'})
      ]);
    });
};

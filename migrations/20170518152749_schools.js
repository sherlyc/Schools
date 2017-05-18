
exports.up = function(knex, Promise) {
  return knex.schema.createTable('schools', function (table){
      table.increments('id').primary()
      table.string('name')
      table.string('schoolType')
      table.string('authority')
      table.string('gender')
      table.integer('decile')
    
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('schools')
};

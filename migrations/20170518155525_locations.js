
exports.up = function(knex, Promise) {
  return knex.schema.createTable('locations', function (table){
    table.increments('id').primary()
    table.integer('latitude')
    table.integer('longitude')
    table.integer('school_id')
      .references('id')
      .inTable('schools')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('locations')
};

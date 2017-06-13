
exports.up = function(knex, Promise) {
  return knex.schema.createTable('locations', function (table){
    table.increments('id').primary()
    table.float('latitude')
    table.float('longitude')
    table.string('suburb')
    table.integer('school_id')
      .references('id')
      .inTable('schools')
      .onDelete('CASCADE')

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('locations')
};

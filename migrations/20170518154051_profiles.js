
exports.up = function(knex, Promise) {
  return knex.schema.createTable('profiles', function(table){
    table.increments('id').primary()
    table.text('address')
    table.string('email')
    table.text('url')
    table.integer('school_id')
      .references('id')
      .inTable('schools')
      // .onDelete('CASCADE');
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('profiles')
}

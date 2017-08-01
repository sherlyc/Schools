exports.up = function(knex, Promise) {
  return knex.schema.createTable("schools", function(table) {
    table.integer("School_ID").primary();
    table.string("Name");
    table.string("Telephone", 20);
    table.string("Fax", 15);
    table.string("Email", 50);
    table.string("Principal", 35);
    table.string("School_Website");
    table.string("Street", 40);
    table.string("Suburb", 26);
    table.string("City", 20);
    table.integer("Postal_Code");
    table.string("Urban_Area", 20);
    table.string("School_Type", 32);
    table.string("Definition", 40);
    table.string("Authority", 25);
    table.string("Gender", 30);
    table.string("Regional_Council", 25);
    table.string("ME_Local_Office", 15);
    table.float("Longitude");
    table.float("Latitude");
    table.integer("Decile");
    table.integer("School_Roll");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("schools");
};

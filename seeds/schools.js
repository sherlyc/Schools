var fs = require("fs");

exports.seed = function(knex, Promise) {
  var sql = fs.readFileSync("./data/schools.sql").toString();
  // Deletes ALL existing entries
  return knex("schools").then(() => knex.raw(sql));
};

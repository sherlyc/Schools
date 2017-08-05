var fs = require("fs");

exports.seed = function(knex, Promise) {
  var sql = fs.readFileSync("./data/test.sql").toString();
  return knex("schools").del().then(function() {
    return knex("schools").then(() => knex.raw(sql));
  });
};

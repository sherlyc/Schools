var knex = require('knex')
var config = require('../knexfile').test

module.exports = (test, createServer) => {
   test.beforeEach(function (t) {
    t.context.db = knex(config)
    if (createServer) t.context.app = createServer(t.context.db)
    return t.context.db.migrate.latest()
      .then(function () {
        return t.context.db.seed.run()
      })
  })

  // Destroy the database connection after each test.
  test.afterEach(function (t) {
    return t.context.db.migrate.rollback()
      .then(function () {
        return t.context.db.destroy()
      })
  })
}

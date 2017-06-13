module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    },
    pool: { //
        afterCreate: (conn, cb) => { //enable foreign key check and cascade delete
          conn.run('PRAGMA foreign_keys = ON', cb)
        },
    },
    useNullAsDefault: true
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL
  },

  test: {
    client: 'sqlite3',
    connection: {
      filename: ':memory:'
    },
    useNullAsDefault: true

  }
}

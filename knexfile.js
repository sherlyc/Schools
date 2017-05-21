module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
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
      filename: ':memory'
    },
    useNullAsDefault: true

  }
};

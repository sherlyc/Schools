module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./dev.sqlite3"
    },
    seeds: {
      directory: __dirname + "/seeds/development"
    },
    pool: {
      //
      afterCreate: (conn, cb) => {
        //enable foreign key check and cascade delete
        conn.run("PRAGMA foreign_keys = ON", cb);
      }
    },
    useNullAsDefault: true
  },

  production: {
    client: "postgresql",
    connection: process.env.DATABASE_URL,
    seeds: {
      directory: __dirname + "/seeds/development"
    }
  },

  test: {
    client: "sqlite3",
    connection: {
      filename: ":memory:"
    },
    seeds: {
      directory: __dirname + "/seeds/test"
    },
    useNullAsDefault: true
  }
};

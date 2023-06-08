// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  
  client: 'mysql2',
  connection: {
    host : '127.0.0.1',
    port : 3306,
    user : 'root',
    password : '1234',
    database : 'tasks'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
  

};

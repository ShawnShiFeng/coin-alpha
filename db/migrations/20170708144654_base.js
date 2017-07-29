exports.up = (knex, Promise) => Promise.all([
  knex.schema.createTableIfNotExists('profiles', (table) => {
    table.increments('id').unsigned().primary();
    table.string('email', 100).notNullable().unique();
    table.string('password').notNullable();
  }),
]);

exports.down = (knex, Promise) => Promise.all([
  knex.schema.dropTable('profiles'),
]);

exports.up = (knex, Promise) => Promise.all([
  knex.schema.createTableIfNotExists('investors', (table) => {
    table.increments('id').unsigned().primary();
    table.string('email', 100).notNullable().unique();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('password').notNullable();
    table.date('created_at').notNullable();
    table.date('updated_at').notNullable();
    table.string('type').notNullable();
    table.boolean('status').notNullable();
    table.string('eth_wallet').notNullable();
  }),
  knex.schema.createTableIfNotExists('funds', (table) => {
    table.increments('id').unsigned().primary();
    table.string('name').notNullable();
    table.string('description');
    table.string('btc_address').nullable();
    table.string('eth_address').nullable();
    table.string('ltc_address').nullable();
    table.string('usd_address').notNullable();
    table.integer('order_size').nullable();
    table.integer('allocation').nullable();
    table.boolean('transferred').nullable();
    table.integer('token').nullable();
    table.integer('currentNAV').nullable();
    table.integer('purchaseNAV').nullable();
    table.string('gdax_access_key').nullable();
    table.string('gdax_secret').nullable();
    table.string('gdax_passphrase').nullable();
    table.date('launch_date').notNullable();
  }),
  knex.schema.createTableIfNotExists('funds_investors', (table) => {
    table.increments('id').unsigned().primary();
    table.integer('fund_id').references('funds.id').onDelete('CASCADE');
    table.integer('investor_id').references('investors.id').onDelete('CASCADE');
    table.float('amount').nullable();
    table.boolean('funded').notNullable();
    table.date('date_funded').nullable();
  }),
  knex.schema.createTableIfNotExists('investor_history', (table) => {
    table.increments('id').unsigned().primary();
    table.integer('fund_id').references('funds.id').onDelete('CASCADE');
    table.integer('investor_id').references('investors.id').onDelete('CASCADE');
    table.date('date').notNullable();
    table.string('action').nullable();
    table.float('amount').nullable();
  }),
  knex.schema.createTableIfNotExists('fund_history', (table) => {
    table.increments('id').unsigned().primary();
    table.integer('fund_id').references('funds.id').onDelete('CASCADE');
    table.float('net_asset_value').notNullable();
    table.date('date_funded').notNullable();
  }),
]);

exports.down = (knex, Promise) => Promise.all([
  knex.schema.dropTable('investor_history'),
  knex.schema.dropTable('fund_history'),
  knex.schema.dropTable('funds_investors'),
  knex.schema.dropTable('investors'),
  knex.schema.dropTable('funds'),
]);

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    await knex.schema.createTable('fruits', table => {
      table.increments('fruit_id');
      table.string('fruit_name', 100).notNullable().unique();
      table.decimal('average_weight_oz').notNullable();
      table.boolean('delicious');
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('fruits');
  };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("sequencer_presets", function (t) {
    t.increments("id").unsigned().primary();
    t.string("name").unique().notNullable();
    // stringify the array of objects into a text field
    t.specificType("pattern", "boolean ARRAY");
    t.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("sequencer_presets");
};

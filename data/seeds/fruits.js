/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("fruits").truncate();
  await knex("fruits").insert([
    { fruit_name: "apple", average_weight_oz: 1.5, delicious: null, color: 'green'},
    { fruit_name: "orange", average_weight_oz: 0.5, delicious: true, color: 'red'},
    { fruit_name: "pear", average_weight_oz: 2.5, delicious: 0, color: 'green'},
  ]);
};

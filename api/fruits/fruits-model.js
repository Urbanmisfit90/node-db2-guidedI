const knex = require('knex')

const db = knex({
  client: 'sqlite3',
  connection: {
    filename: './data/produce.db3'
  },
  useNullAsDefault: true
});

function getAll() {
  return db('fruits');
}

function getById(id) {
  return db('fruits').where('fruit_id', id).first();
}

async function create({fruit_name, average_weight_oz}) {
  const fruits = await db('fruits').insert({fruit_name, average_weight_oz});
  return fruits;
}

module.exports = {
  getAll,
  getById,
  create,
};

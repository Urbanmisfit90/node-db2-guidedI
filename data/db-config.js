const knex = require('knex')
const configs = require('../knexfile.js')
const env = 'development' // Set the environment directly

module.exports = knex(configs[env])
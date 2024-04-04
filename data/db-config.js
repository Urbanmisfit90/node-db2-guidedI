const knex = require('knex')
const configs = require('../knexfile.js')
const environment = 'development' // Set the environment directly

module.exports = knex(configs[environment])
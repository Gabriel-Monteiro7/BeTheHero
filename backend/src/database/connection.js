const knex = require('knex');

const configuration = require('../../knexfile')

//Desenvolvimento ou Teste
//const config = process.env.NODE_ENV == 'test' ? configuration.test : configuration.development

//Produção
const config = configuration.production

const connection = knex(config);

module.exports = connection;
const { pool, Client } = require('pg');

const client = new Client({
    user: 'postgres',
    host: 'pgty.culspqqylzzq.ap-south-1.rds.amazonaws.com',
    database: 'postgresnew',
    password: 'testyoudb',
});

client.connect();

module.exports = client;
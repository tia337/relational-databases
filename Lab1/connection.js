require('dotenv').load()

const pgp = require('pg-promise')({});
const connection = {
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DBNAME,
    password: process.env.PG_PASSWORD,
    port: parseInt(process.env.PG_PORT)
};

const DB = pgp(connection);

module.exports = DB;
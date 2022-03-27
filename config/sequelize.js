require('dotenv').config();

const db_connection = process.env.DB_CONNECTION;
const db_database = process.env.DB_DATABASE;
const db_username = process.env.DB_USERNAME;
const db_password = process.env.DB_PASSWORD;

const sequelize = require('sequelize');
const db = new sequelize(db_database,db_username,db_password,{
    dialect: db_connection
});
db.sync({});
module.exports = db;
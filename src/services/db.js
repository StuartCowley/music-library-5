// db.js is our app to connect to a specific database

const mysql = require('mysql2/promise');

const { DB_PASSWORD, DB_USER, DB_NAME, DB_HOST, DB_PORT } = process.env;

module.exports = async () => {
  const connection = await mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_NAME, // this is for the app to connect to a specific database within the database server
  });

  return connection;
};
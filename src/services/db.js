// db.js is our app to connect to a specific database

const mysql = require('mysql2/promise');

const { DB_PASSWORD, DB_USER, DB_NAME, DB_HOST, DB_PORT, CLEARDB_DATABASE_URL } = process.env;

module.exports = async () => {
  const connection = CLEARDB_DATABASE_URL?
  await mysql.createConnection(CLEARDB_DATABASE_URL)
  :await mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_NAME, // this is for the app to connect to a specific database within the database server
  });

  return connection;
};
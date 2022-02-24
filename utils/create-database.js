// create-database.js runs before our app or tests start
// to make sure the database exists and contains the correct tables.
const mysql = require('mysql2/promise');

// require path to handle file paths
const path = require('path');

/* example
console.log(process.argv);
> node argv.js one two three four five
[ 'node',
  '/home/avian/argvdemo/argv.js',
  'one',
  'two',
  'three',
  'four',
  'five' ]
*/
const args = process.argv.slice(2)[0];

// use args to determine if .env or .env.test should be loaded
const envFile = args === 'test' ? '../.env.test' : '../.env';

// config will read your .env file, parse the contents, assign it to process.env, and return an Object with a parsed key containing the loaded content or an error key if it failed.
require('dotenv').config({
  path: path.join(__dirname, envFile),
});

// destructure environment variables from process.env 
const { DB_PASSWORD, DB_NAME, DB_USER, DB_HOST, DB_PORT } = process.env;

// This asyncronous function will run before app
const setUpDatabase = async () => {
  try {

    // connect to the database
    const db = await mysql.createConnection({
      host: DB_HOST,
      user: DB_USER,
      password: DB_PASSWORD,
      port: DB_PORT,
    });

    // create the database if it doesn't already exist
    await db.query(`USE ${DB_NAME}`);
    // create the artist table
    await db.query(`CREATE TABLE IF NOT EXISTS Artist (
      id INT PRIMARY KEY auto_increment,
      name VARCHAR(25),
      genre VARCHAR(25)
    )`);
    // create the album table
    await db.query(`CREATE TABLE IF NOT EXISTS Album (
      id INT PRIMARY KEY auto_increment,
      name VARCHAR(25),
      year INT,
      artistId INT,
      FOREIGN KEY (artistId) REFERENCES Artist(id)
    )`);

    db.close();

  } catch (err) {
   // if something goes wrong, console.log the error and the current environment variables
    console.log(
      `Your environment variables might be wrong. Please double check .env file`
    );
    console.log('Environment Variables are:', {
      DB_PASSWORD,
      DB_NAME,
      DB_USER,
      DB_HOST,
      DB_PORT,
    });
    console.log(err);
  }
};

// run the async function
setUpDatabase();
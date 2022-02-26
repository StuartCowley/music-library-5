const { expect } = require('chai'); // a TDD assertion library for node used together with Mocha
const request = require('supertest');
const getDb = require('../src/services/db');
const app = require('../src/app');

// Test suite 'describe()' - test the main functionality of create artist
// describe() takes a string & callback, the callback function contains all of the code for the different tests being run
describe('create artist', () => {
  let db;
  // beforeEach() & afterEach() get called before & after each it() block
  beforeEach(async () => (db = await getDb())); // app connects to a database before the test
  // to tear down the database after test
  afterEach(async () => {
    await db.query('DELETE FROM Artist');
    await db.close();
  });

  describe('/artist', () => {
    describe('POST', () => {
      // Each it() block describes more particular behavior to test.
      it('creates a new artist in the database', async () => {
        const res = await request(app).post('/artist').send({
          name: 'Tame Impala',
          genre: 'rock',
        });
        // assertion below - comparing the actual and expected values
        expect(res.status).to.equal(201);

        const [[artistEntries]] = await db.query(
          `SELECT * FROM Artist WHERE name = 'Tame Impala'`
        );
        /*
        Each it() block test includes multiple assertions, 
        because there are multiple scenarios and edge cases that we want to test for. 
        The error messages that you get from failed tests will most likely point to 
        one of these assertions.
        */
        expect(artistEntries.name).to.equal('Tame Impala');
        expect(artistEntries.genre).to.equal('rock');
      });
    });
  });
});
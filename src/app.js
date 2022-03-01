const express = require('express');
//const models = require('../src/models');
const artistRouter = require('./routes/artistRouter');
const albumRouter = require('./routes/albumRouter');

const app = express();

app.use(express.json());

app.use('/artists', artistRouter);
app.use('/albums', albumRouter);

module.exports = app;

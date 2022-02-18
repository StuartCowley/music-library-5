const express = require('express');
const artistRouter = require('./routes/artistRouter');

const app = express();

app.use(express.json());
app.use('/artist', artistRouter);

module.exports = app;

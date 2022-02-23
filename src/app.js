const express = require('express');
const artistRouter = require('./routes/artistRouter');
const albumRouter = require('./routes/albumRouter')

const app = express();

app.use(express.json());

app.use('/artist', artistRouter);
app.use('/album', albumRouter);

module.exports = app;

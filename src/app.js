const express = require('express');
const artistRouter = require('./routes/artist');
const albumRouter = require('./routes/albums');

const app = express();
app.use(express.json());

app.use('/artists', artistRouter);
app.use('artists', albumRouter);

module.exports = app;

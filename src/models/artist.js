const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
  name: String,
  genre: String,
});

const Artist = new mongoose.model('Aritist', artistSchema);

module.exports = Artist;

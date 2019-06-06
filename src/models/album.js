const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  genre: String,
  year: {
    type: Number,
    required: true,
  },
  artist: {
    type: mongoose.Schema.ObjectId,
    ref: 'Artist',
  },
});

const Album = new mongoose.model('Album', albumSchema);

module.exports = Album;

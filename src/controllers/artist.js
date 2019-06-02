const Artist = require('../models/artist');

exports.createArtist = (req, res) => {
  const artist = new Artist({
    name: req.body.name,
    genre: req.body.genre,
  });
  artist.save().then(() => {
    res.status(201).json(artist);
  });
};

exports.listAll = (req, res) => {
  Artist.find().then((artist) => {
    res.status(200).json(artist);
  });
};

exports.find = (req, res) => {
  Artist.findById({
    _id: req.params.artistId,
  }).then((err, artist) => {
    if (artist === null) {
      res.status(404).json({
        err: 'The artist could not be found.',
      });
    } else {
      res.status(200).json(artist);
    }
  });
};

const Album = require('../models/album');
const Artist = require('../models/artist');

exports.createAlbum = (req, res) => {
  Artist.findById(req.params.artistId, (err, artist) => {
    if (err) throw err;

    const album = new Album({
      artist,
      name: req.body.name,
      year: req.body.year,
      genre: req.body.genre,
    });

    album.save().then((error) => {
      if (error) {
        res.status(401).json({
          error: error,
        });
      }
      res.status(201).json(album);
    });
  });
};

exports.getAlbums = (req, res) => {
  Artist.findById(req.params.artistId, (err, artist) => {
    console.log(artist);
  });
};

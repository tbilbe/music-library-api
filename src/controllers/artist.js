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
  Artist.findById(req.params.artistId, (err, artist) => {
    if (!artist) {
      res.status(404).json({
        error: 'The artist could not be found.',
      });
    } else {
      res.status(200).json(artist);
    }
  });
};

exports.updateArtist = (req, res) => {
  Artist.findById(req.params.artistId, (err, artist) => {
    if (!artist) {
      res.status(404).json({
        error: 'The artist could not be found.',
      });
    } else {
      artist.set(req.body);
      artist.save().then(() => {
        res.status(200).json(artist);
      });
    }
  });
};

exports.deleteArtist = (req, res) => {
  Artist.findByIdAndDelete(req.params.artistId, (err, artist) => {
    if (!artist) {
      res.status(404).json({
        error: 'The artist could not be found.',
      });
    } else {
      res.status(204).json({
        success: 'The artist was successfully deleted from the database.',
      });
    }
  });
};

// exports.createAlbum = (req, res) => {
//   Artist.findById(req.params.artistId, (err, artist) => {
//     if (!artist) {
//       res.status(404).json({
//         error: 'The artist could not be found.',
//       });
//     } else {
//       const album = new Album({
//         artist,
//         name: req.body.name,
//         year: req.body.year,
//         genre: req.body.genre,
//       });
//       album.save(() => {
//         res.status(201).json(album);
//       });
//     }
//   });
// };

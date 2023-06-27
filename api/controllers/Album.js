const album = require('../models/album');
const fs = require('fs');

// Recupérer album (id)
exports.getOneAlbum = (req, res, next) => {
  album
    .findOne({ _id: req.params.id }) // Methode pour trouver une album unique
    .then((album) => res.status(200).json(album))
    .catch((error) =>
      res.status(404).json({
        error:
          "La album n'existe pas pour le moment. Veuillez réessayer, n'hesitez pas à la créer vous même!",
      })
    );
};

// Récupération des albums (toutes)
exports.getAllAlbums = (req, res, next) => {
  album
    .find() // Methode renvoie un tableau contenant toutes les albums dans la base de données
    .then((album) => res.status(200).json(album))
    .catch((error) =>
      res.status(404).json({
        error:
          "Aucune album n'est disponible pour le moment. Revenez plus tard ou créez en une! ",
      })
    );
};

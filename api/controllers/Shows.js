const Show = require('../models/Shows');

exports.getAllShows = (req, res, next) => {
  Show.find()
    .then((show) => res.status(200).json(show))
    .catch((error) =>
      res.status(404).json({
        error:
          "Aucun show n'est disponible pour le moment. Revenez plus tard ou créez en une! ",
      })
    );
};

exports.getOneShow = (req, res, next) => {
  Show.findOne({ _id: req.params.id })
    .then((show) => res.status(200).json(show))
    .catch((error) =>
      res.status(404).json({
        error: "Le show n'existe pas pour le moment.",
      })
    );
};

// Importation de mongoose pour la communiaction avec la BDD
const mongoose = require('mongoose');

// Creation schema de donnée
// Modèle de donnée qui permet d'enregistrer, lire et modifier les objets qui sont dans la base de donnée
const sauceSchema = mongoose.Schema({
  id: { type: String, required: true, default: 'defaultId' },
  bandcamp: { type: String, required: true },
  title: { type: String, required: true },
  cover: { type: String, required: true },
  artwork: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  release: { type: String, required: true },
  pictures: { type: [String], required: true, default: [] },
  songs: { type: [String], required: true, default: [] },
  label: { type: [String], required: true, default: [] },
});

module.exports = mongoose.model('sauce', sauceSchema);

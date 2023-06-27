const mongoose = require('mongoose');
const AlbumSchema = mongoose.Schema({
  tag: { type: String, required: true },
  albumName: { type: String, required: true },
  bandcamp: { type: String, required: true },
  imageUrl: { type: [String], required: true },
  songs: { type: [String], required: true },
});

module.exports = mongoose.model('Album', AlbumSchema);

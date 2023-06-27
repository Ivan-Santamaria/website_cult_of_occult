const mongoose = require('mongoose');

const ShowsSchema = mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, require: true },
  info: { type: [String], required: true },
  linktovenue: { type: String, required: true },
});

module.exports = mongoose.model('Show', ShowsSchema);

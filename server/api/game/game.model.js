'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var GameSchema = new Schema({
  name: String,
  category: String,
  description: String,
  players: String
});

module.exports = mongoose.model('Game', GameSchema);

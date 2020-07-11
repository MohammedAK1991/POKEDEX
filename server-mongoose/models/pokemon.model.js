const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pokemonSchema = new Schema({
  id: { type: Number },
  image: { type: String, required: false },
  name: {type:String, required:false},
  url: {type:String}
});

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon;
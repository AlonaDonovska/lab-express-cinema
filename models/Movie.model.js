const mongoose = require('mongoose');
 
const MovieSchema = new Schema(
  {
    title: String,
    director: String,
    stars: String,
    image: Image,
    description: String,
    showtimes: Array
  },
  {
    timestamps: true
  }
);
const MovieModel = new mongoose.model('Movie', MovieSchema) 
module.exports = MovieModel
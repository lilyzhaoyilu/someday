const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema(
  {
    apiId: {
      type: String,
      required: true,
    },
    name: {
      type: String, 
      required: true,
    },
    imgUrl: {
      type: String,
    },
    tag: [String],
  },
  { _id: true, timestamps: true }
);
const Movie = mongoose.model("movie", MovieSchema);
module.exports = Movie;
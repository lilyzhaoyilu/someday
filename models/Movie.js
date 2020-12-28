const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({

  apiId: {
    type: String,
  }

},{_id: true, timestamps: true})

module.exports = mongoose.model('movie', MovieSchema)
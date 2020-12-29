const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  movie: {
    type: Schema.Types.ObjectId,
    ref: "movies",
  },
  reply:{
    type: Schema.Types.ObjectId,
    ref: 'comments',
    default: null,
  },
  text: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
const Comment = mongoose.model('comment', CommentSchema )
module.exports = Comment;

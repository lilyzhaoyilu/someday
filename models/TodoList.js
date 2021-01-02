const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TodoListSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  movie: [
    {
      type: String,
      required: true,
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

const TodoList = mongoose.model("todoList", TodoListSchema);
module.exports = TodoList;

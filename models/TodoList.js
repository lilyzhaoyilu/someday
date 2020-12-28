const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoList = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
    }
})
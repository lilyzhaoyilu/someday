const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WatchedListSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
    },
    movie: [{
        type: String,
        required: true
    }],
    date: {
        type: Date,
        default: Date.now
    }
});

const WatchedList = mongoose.model('watchedList', WatchedListSchema);
module.exports = WatchedList;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    categories: [{
        type: Schema.Types.ObjectId,
        ref: 'category',
        required: true
    }]
});

module.exports = mongoose.model('post', PostSchema);
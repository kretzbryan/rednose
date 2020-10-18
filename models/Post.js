const mongoose = require('mongoose')


const postSchema = new mongoose.Schema({
    text: {type: String, required: true},
    name: {type: String, required: true},
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    likes: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    comments: [
    {
        user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
        },
        text: {
            type: String, 
            required: true},
        name: {
            type: String
        }
    },
    {timestamps: true}
],
}, {timestamps: true})

module.exports = mongoose.model('Post', postSchema);
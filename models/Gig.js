const mongoose = require('mongoose')

const gigSchema = new mongoose.Schema({
    title: {type: String, required: true},
    location: {type: String, required: true},
    text: {type: String, required: true},
    name: {type: String, require: true},
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    } 
}, {timestamps: true})

module.exports = mongoose.model('Gig', gigSchema);
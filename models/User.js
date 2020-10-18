const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    avatar: { type: String },
    title: {type: String, required: false},
    profileImage: { type: String, required: false },
    location: {type: String, required: false},
    certifications: [{
        type: String,
        required: false
    }],
    insurance: {type:String, required: false},
    following: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
}, {timestamps: true});

module.exports = mongoose.model('User', userSchema);
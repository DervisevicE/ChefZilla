const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String
    },
    followers: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    }],
    following: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    }],
})
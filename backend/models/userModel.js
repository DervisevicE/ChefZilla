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


userSchema.statics.signup = async function (username, email, password, profilePicture) {
    if (!username || !email || !password) {
        throw new Error('Please provide email, username and password')
    }

    if (password.length < 8) {
        throw new Error('Password must be at least 8 charachers long')
    }

    if (username.length < 3) {
        throw new Error('Username must be at least 3 characters long.')
    }

    if (!/[a-zA-Z]/.test(username)) {
        throw new Error('Username must contain at least one letter')
    }

    if (!validator.isEmail(email)) {
        throw new Error('Email is invalid')
    }

    if (!validator.isStrongPassword(password)) {
        throw new Error('Password must contain at least 1 uppercase, 1 lowercase, 1 number and 1 symbol')
    }

    const emailExists = await this.findOne({ email })
    if (emailExists) {
        throw new Error('Email already is use')
    }
    const usernameExists = await this.findOne({ username })
    if (usernameExists) {
        throw new Error('Username already is use')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({ username, email, password: hash, profilePicture })

    return user
}

userSchema.statics.login = async function (username, email, password) {

    if(!email || !password || !username) {
        throw new Error('Please provide email, username and password')
    }

    const user = await this.findOne({ email, username })

    if (!user) {
        throw new Error('Invalid credentials')
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
        throw new Error('Incorrect password')
    }

    return user
}


module.exports = mongoose.model('User', userSchema)
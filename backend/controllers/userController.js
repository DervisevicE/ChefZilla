const { default: mongoose } = require('mongoose')
const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.JWT_KEY, { expiresIn: '1d' })
}

const signupUser = async (req, res) => {
    const { username, email, password, profilePicture } = req.body
    try {
        const user = await User.signup(username, email, password, profilePicture)

        const token = createToken(user._id)

        res.status(202).json({ username, token })
    } catch (error) {
        res.status(404).json({ mssg: error.message })
    }
}

const loginUser = async (req, res) => {
    const { username, email, password } = req.body

    try {
        const user = await User.login(username, email, password)

        const token = createToken(user._id)

        res.status(202).json({ username, token })
    } catch (error) {
        console.log(error);
        res.status(404).json({ mssg: error.message })
    }
}

const getUser = async (req, res) => {
    const id = req.user._id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such user' })
    }

    const user = await User.findById({ _id: id })

    if (!user) {
        return res.status(404).json({ error: 'No such user' })
    }
    res.status(202).json(user)

}


const getUserById = async (req, res) => {
    const { id } = req.params;
    const userId = req.user._id;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ error: 'No such user' })
        }

        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(404).json({ error: 'No such user' })
        }


        const user = await User.findById({ _id: id })

        if (!user) {
            return res.status(404).json({ error: 'No such user' })
        }
        res.status(202).json(user)


    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching user by id' });
    }
}

const updateUserDetails = async (req, res) => {
    const id = req.user._id

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such user' })
    }

    const user = await User.findByIdAndUpdate({ _id: id }, { ...req.body })

    if (!user) {
        return res.status(404).json({ error: 'No such user' })
    }
    res.status(202).json(user)
}


module.exports = {
    signupUser,
    loginUser,
    getUser,
    getUserById,
    updateUserDetails
}
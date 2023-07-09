const express = require('express')
const {signupUser, loginUser, getUser, getUserById, updateUserDetails} = require('../controllers/userController')
const jwtGuard = require('../middleware/auth')

const router = express.Router()

//Create user
router.post('/signup', signupUser)

//Login user
router.post('/login', loginUser)

//Get user
router.get('/', jwtGuard, getUser)

//Get user by id
router.get('/:id', jwtGuard, getUserById)

//Update user details
router.patch('/', jwtGuard, updateUserDetails)

module.exports = router

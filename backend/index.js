require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const userRoutes = require('./routes/userRoutes')


const app = express()

app.use(cors())
app.use(express.json())

app.use('/user', userRoutes)
mongoose.connect(process.env.MONGO_URI)
    .then(() => {

        const server = app.listen(8000, function () {
            const host = server.address().address
            const port = server.address().port
            console.log("App connceted to database & listening at http://%s", port)
        })
    })
    .catch((error) => {
        console.log(error)
    })
require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const noteRoutes = require('./routes/notesRoutes')
const userRoutes = require('./routes/userRoutes')
const cors = require('cors');


// express app
const app = express()


app.use(express.json())
app.use(cors());

//routes
app.use('/api/notes', noteRoutes)
app.use('/api/user', userRoutes)

//connect to database
mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,

})
    .then(() => {
        //listen to the request
        app.listen(process.env.PORT, () => {
            console.log(`connect to database & listening on port ${process.env.PORT}`)
        })
    })
    .catch((error) => {
        console.log(error)
    })



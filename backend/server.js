require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/route')
const cors = require('cors');


// express app
const app = express()


app.use(express.json())
app.use(cors());

//routes
app.use('/api/notes', routes)

//connect to database
mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,

})
    .then(() => {
        //listen to the request
        app.listen(process.env.PORT, () => {
            console.log(`connect to databse & listening on port ${process.env.PORT}`)
        })
    })
    .catch((error) => {
        console.log(error)
    })



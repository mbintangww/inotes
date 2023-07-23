const mongoose = require('mongoose')

const Schema = mongoose.Schema

const noteSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String
    },

}, { timestamps: true })

module.exports = mongoose.model('notes', noteSchema)
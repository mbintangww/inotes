const mongoose = require('mongoose')

const Schema = mongoose.Schema

const noteSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: false

    },
    description: {
        type: String,
        required: true,
        unique: false
    },
    user_id: {
        type: String,
        required: true
    }

}, { timestamps: true })

module.exports = mongoose.model('notes', noteSchema)
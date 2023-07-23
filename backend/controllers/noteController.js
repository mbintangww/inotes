const Note = require('../model/notesModel')
const mongoose = require('mongoose')

//GET all notes
const getAllNotes = async (req, res) => {
    const notes = await Note.find().sort({ createdAt: -1 })

    res.status(200).json(notes)
}
//GET a single note
const getNoteById = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'no such error' })
    }

    const note = await Note.findById(id)

    if (!note) {
        return res.status(404).json({ msg: 'No such note' })
    }

    return res.status(200).json(note)
}
//CREATE  a new note
const createNote = async (req, res) => {
    const { title, description } = req.body

    try {
        const note = await Note.create({ title, description })
        res.status(200).json(note)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

//DELETE a note
const deleteNoteById = async (req, res) => {
    const { id } = req.params


    const note = await Note.findOneAndDelete({ _id: id })

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'no such error' })
    }

    return res.status(200).json(note)

}
//UPDATE a note
const updateNoteById = async (req, res) => {
    const { id } = req.params


    const note = await Note.findOneAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'no such error' })
    }

    return res.status(200).json(note)
}

module.exports = {
    getAllNotes,
    getNoteById,
    createNote,
    deleteNoteById,
    updateNoteById
}
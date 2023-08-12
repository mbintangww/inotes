const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const { getAllNotes,
    getNoteById,
    createNote,
    deleteNoteById,
    updateNoteById
} = require('../controllers/noteController')

router.use(auth)
//get all notes
router.get('/', getAllNotes)

//get a specific note
router.get('/:id', getNoteById)

//post a note
router.post('/', createNote)

//delete a note
router.delete('/:id', deleteNoteById)

//update a note
router.patch('/:id', updateNoteById)




module.exports = router
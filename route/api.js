const express = require('express')
const route = express.Router()
const noteController = require('../controller/note')

route.get('/getNote', (req, res) => {
    res.status(200).json(noteController.getNote())
})

route.post('/newNote', (req, res) => {
    const title = req.body.title
    const description = req.body.description
    const response = noteController.createNote(title, description)

    if (response.status === 400) {
        res.status(response.status).json({ message: "NOTE NOT CREATED" })
    }
    else {
        res.status(response.status).json({ message: "NOTE CREATED" })
    }

})

route.delete('/deleteNote/:id', (req, res) => {

    const id = req.params.id
    const removeNote = noteController.deleteNote(id)
    
    if (removeNote.status === 400) {
        res.status(removeNote.status).json({ message: "NOTE NOT FOUND" })
    }
    
    else {
        res.status(removeNote.status).json({ message: "NOTE REMOVED" })
    }
    
})


module.exports = route
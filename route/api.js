const express = require('express')
const route = express.Router()
const note = require('../controller/note')

route.post('/newNote', (req, res) => {
    const title = req.body.title
    const description = req.body.description
    note.createNote(title, description)

    if (title == "" || description == "") {
        res.status(404).json({ message: 'NOTE NOT CREATED' })
    }
    
    res.status(200).json({ message: 'NOTE CREATED' })
})

route.delete('/deleteNote/:id', (req, res) => {
    const id = req.params.id
    note.deleteNote(id)
    res.json('ok')
})


module.exports = route
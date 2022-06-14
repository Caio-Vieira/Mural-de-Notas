const express = require('express')
const app = express()
const path = require('path')
const apiRoute = require('./route/api')
const noteController = require('./controller/note')

app.set('views', path.join(__dirname, 'view'))
app.set('view engine', 'ejs')
app.use(express.json())

app.use('/api', apiRoute)

app.get('/', (req, res)=>{
  res.render('index', {notes: noteController.getNote()})
})

app.listen(3000, ()=>{

  console.log(`server rodando na porta http://localhost:3000`);

})
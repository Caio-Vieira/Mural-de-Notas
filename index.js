const express = require('express')
const app = express()
const path = require('path')
const api = require('./route/api')
const notes = require('./controller/note')
const PORT = 3000


app.set('views', path.join(__dirname, 'view'))
app.set('view engine', 'ejs')
app.use(express.json())

app.use('/api', api)


app.get('/', (req, res)=>{
  res.render('index', {notes: notes.posts})
})


app.listen(PORT, ()=>{


  console.log(`server rodando na porta http://localhost:${PORT}`);

})
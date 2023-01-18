const express = require('express')
const app = express()

app.set('view engine', 'hbs');

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('index', {
    titulo:"Cambia tu vida"
  })
})

app.listen(3000)
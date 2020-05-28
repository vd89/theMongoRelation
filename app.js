const express = require('express');
const app = express()

const bookRoutes = require('./routes/booksRouter')
const reviewRoutes = require('./routes/reviewRouter')

require('./db/dbController')

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.get('/',(req,res) => {
  res.send(`This is the home route`)
})
app.use('/book',bookRoutes)
app.use('/review',reviewRoutes)

const port = process.env.PORT || 8085
app.listen(port,() => {
  console.log(`The server started at port ${port}`);
})
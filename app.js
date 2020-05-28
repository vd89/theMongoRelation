const express = require('express');
const app = express()


require('./db/dbController')

app.use(express.urlencoded({extended:false}))
app.use(express.json())

const port = process.env.PORT || 8085
app.listen(port,() => {
  console.log(`The server started at port ${port}`);
})
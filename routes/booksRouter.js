const express = require('express');
const router = express.Router()
const Book = require('../model/books')

router.get('/',async (req,res) => {
  try {
    const data = await Book.find({})
    res.send(data)
  } catch (err) {
    res.send(err)
  }
})
router.post('/',async (req,res) => {
  const book = new Book(req.body)
  try {
    const data = await book.save()
    res.send(data)
  } catch (err) {
    res.send(err)
  }
})




module.exports = router

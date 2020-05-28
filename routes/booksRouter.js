const express = require('express');
const router = express.Router()
const Book = require('../model/books')
const Review = require('../model/review');

router.get('/',async (req,res) => {
  try {
    const data = await Book.find({})
    res.send(data)
  } catch (err) {
    res.send(err)
  }
})
router.post('/:rid',async (req,res) => {
  try {
    const rid = req.params.rid
    const book = new Book(req.body)
    const review = await Review.findById(rid)
    book.review =review
    await book.save()
    review.books.push(book)
    await review.save()
    res.json(book)
  } catch (err) {
    res.send(err)
  }
})




module.exports = router

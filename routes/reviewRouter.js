const express = require('express');
const router = express.Router()
const Review = require('../model/review');
const Book = require('../model/books')


router.get('/',async (req,res) => {
  try {
    const data = await Review.find({})
    res.send(data)
  } catch (err) {
    res.send(err)
  }
})

router.post('/:bid',async (req,res) => {
  
  try {
    const review = new Review(req.body)
    const bid = req.params.bid
    const book = await Book.findById(bid)
    
    const data = await review.save()
    res.send(data)
  } catch (error) {
    res.send(err)
  }
})

module.exports = router
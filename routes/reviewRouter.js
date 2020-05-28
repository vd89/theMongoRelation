const express = require('express');
const router = express.Router()
const Review = require('../model/review');


router.get('/',async (req,res) => {
  try {
    const data = await Review.find({})
    res.send(data)
  } catch (err) {
    res.send(err)
  }
})

router.post('/',async (req,res) => {
  
 try {
   const review = new Review(req.body)
   const data = await review.save()
   res.send(data)
 } catch (error) {
   res.send(error)
 }
})

module.exports = router
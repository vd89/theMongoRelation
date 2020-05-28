const mongoose = require('mongoose'); 


const ReviewSchema = new mongoose.Schema({

  name:{
    type: String
  },
  shortComment:{
    type: String
  },
  rating:{
    type: Number
  },
  book:{
    type: Schema.Types.ObjectId,
    ref: 'Book'
  }

})

module.exports = mongoose.model('Review',ReviewSchema)

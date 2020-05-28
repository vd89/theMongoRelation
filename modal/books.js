const mongoose = require('mongoose');

const BookSchmea = new mongoose.Schema({
  title:{
    type: String
  },
  author:{
    type: Array
  },
  publication:{
    type: String
  },
  publicationYear :{
    type: Number
  },
  review:[
    {
      type: Schema.Types.ObjectId,
      ref: 'Review'
    }
  ]
})


module.exports = mongoose.model('Book',BookSchmea)

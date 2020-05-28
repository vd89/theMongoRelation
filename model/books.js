const mongoose = require('mongoose');
const Schema = mongoose.Schema
const BookSchmea = new Schema({
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

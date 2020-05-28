const mongoose = require('mongoose');

const uri = `mongodb://localhost/relation`
const para = {
  useNewurlParser:true,
  useUnifiedTopology: true
}


mongoose.connect(uri,para,(err) => {
  if (err) {
    throw err 
  } else {
    console.log(`MongoDB is connected to the app`);
  }
})
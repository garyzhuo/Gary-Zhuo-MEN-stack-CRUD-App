// Require the Mongoose package
const mongoose = require('mongoose');
const reviewSchema = require('./review');

// This is my first schema, this would be used for my espresso coffee
const espressoSchema = new mongoose.Schema({
  name: String,
  photo: String,
  price: String,
  description: String,
  isFeatured: { type: Boolean, default: false},
  roast: String,
  reviews: [reviewSchema]
});


/*const reviewsSchema = mongoose.Schema({
    name: String,
    review: String,
    reviewDate: String
}); */

// Export the schema as a Monogoose model. 
// The Mongoose model will be accessed in `models/index.js`
//Will be grabbing the file from models/index
module.exports = mongoose.model('Espresso', espressoSchema);


// Require the Mongoose package
const mongoose = require('mongoose');

// This is my first schema, this would be used for my espresso coffee
const espressoSchema = new mongoose.Schema({
  name: { type: String, required: true},
  photo: String,
  price: String,
  description: { type: String, required: true},
  roast: {type: String, requried: true},
  isFeatured: { type: Boolean, default: false}
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


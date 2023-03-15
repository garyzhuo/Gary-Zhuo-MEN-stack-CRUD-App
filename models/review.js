// Require the Mongoose package
const mongoose = require('mongoose')

// Create a schema to define the properties of the review model
const reviewSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        review: {
            type: String,
            required: true
        },
        // a review can only be created if it references an existing user._id
        rating: {
            type: Number,
            required: true
        }
    },
);

// DO NOT export the schema as a Mongoose model. 
// The schema will be accessed in `models/restaurant.js`
module.exports = reviewSchema;

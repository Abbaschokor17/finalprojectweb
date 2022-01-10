const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
 
});

const Review = mongoose.model("review", reviewSchema);

module.exports = Review;
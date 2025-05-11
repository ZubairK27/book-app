// src/backend/models/Book.js
const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  user: String,
  comment: String,
  rating: Number
});

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  year: Number,
  genre: String,
  coverImage: String,
  description: String,
  rating: Number,
  reviews: [reviewSchema]
});

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;

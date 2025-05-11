// src/backend/routes/genreRoutes.js
const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

// GET /api/genres - return unique genres
router.get('/', async (req, res) => {
  try {
    const genres = await Book.distinct('genre');
    res.json(genres);
  } catch (err) {
    console.error('Error fetching genres:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;

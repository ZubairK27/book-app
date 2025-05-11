import React, { useState } from 'react';
import BookCard from './BookCard';

const BookList = ({ books, addToFavorites, removeFromFavorites }) => {
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    year: '',
    genre: '',
    coverImage: '',
    description: '',
    rating: ''
  });

  const [adding, setAdding] = useState(false);

  const handleChange = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/books', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...newBook, year: parseInt(newBook.year), rating: parseFloat(newBook.rating) })
      });
      const addedBook = await res.json();
      if (res.ok) {
        window.location.reload(); // or lift state up to update `books` from parent
      } else {
        alert('Failed to add book.');
      }
    } catch (err) {
      console.error('Add book error:', err);
    }
  };

  return (
    <div className="book-list-wrapper">
      <button onClick={() => setAdding(!adding)}>
        {adding ? 'Cancel' : 'Add New Book'}
      </button>

      {adding && (
        <form onSubmit={handleSubmit} className="add-book-form">
          <input name="title" placeholder="Title" onChange={handleChange} required />
          <input name="author" placeholder="Author" onChange={handleChange} required />
          <input name="year" type="number" placeholder="Year" onChange={handleChange} required />
          <input name="genre" placeholder="Genre" onChange={handleChange} required />
          <input name="coverImage" placeholder="Cover Image URL" onChange={handleChange} />
          <textarea name="description" placeholder="Description" onChange={handleChange}></textarea>
          <input name="rating" type="number" step="0.1" placeholder="Rating" onChange={handleChange} required />
          <button type="submit">Submit</button>
        </form>
      )}

      <div className="book-list">
        {books.map((book) => (
          <BookCard
            key={book._id}
            book={book}
            addToFavorites={addToFavorites}
            removeFromFavorites={removeFromFavorites}
          />
        ))}
      </div>
    </div>
  );
};

export default BookList;

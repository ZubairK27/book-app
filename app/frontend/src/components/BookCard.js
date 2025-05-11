import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book, addToFavorites, removeFromFavorites }) => {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const isFavorite = favorites.some((b) => b._id === book._id);

  return (
    <div className="book-card">
      <img src={book.coverImage || 'https://via.placeholder.com/200x300'} alt={book.title} />
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <p>{book.year}</p>
      <p>{book.genre}</p>
      <p>Rating: {book.rating}</p>
      <Link to={`/books/${book._id}`}>View Details</Link>
      {isFavorite ? (
        <button onClick={() => removeFromFavorites(book._id)}>Remove from Favorites</button>
      ) : (
        <button onClick={() => addToFavorites(book)}>Add to Favorites</button>
      )}
    </div>
  );
};

export default BookCard;

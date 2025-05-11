// src/components/FavoritesList.js
import React from 'react';
import { Link } from 'react-router-dom';

const FavoritesList = ({ favorites, removeFromFavorites }) => {
  if (!favorites.length) {
    return <p>You have no favorite books yet.</p>;
  }

  return (
    <div>
      <h2>Your Favorite Books</h2>
      <ul>
        {favorites.map((book) => (
          <li key={book._id}>
            <Link to={`/books/${book._id}`}>{book.title}</Link>
            <button
              style={{ marginLeft: '1rem' }}
              onClick={() => removeFromFavorites(book._id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesList;

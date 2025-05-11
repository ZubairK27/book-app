import React from 'react';
import { useParams } from 'react-router-dom';

const BookDetail = ({ books }) => {
  const { id } = useParams();
  const book = books.find(b => b.id === id); // ✅ MongoDB IDs are strings

  if (!book) return <div>Book not found</div>;

  return (
    <div className="book-detail">
      <h2>{book.title}</h2>
      <img src={book.coverImage || 'https://via.placeholder.com/400x400'} alt={book.title} />
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Year:</strong> {book.year}</p>
      <p>{book.description}</p>
      <h3>Reviews</h3>
      {book.reviews?.length ? (
        <ul>
          {book.reviews.map(review => (
            <li key={review.id || review._id}>
              <p>{review.user}: {review.comment} (Rating: {review.rating})</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews yet.</p>
      )}
    </div>
  );
};

export default BookDetail;

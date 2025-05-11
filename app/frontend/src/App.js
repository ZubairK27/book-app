import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';
import FavoritesList from './components/FavoritesList';
import SearchBar from './components/SearchBar';
import GenreFilter from './components/GenreFilter';
import Sidebar from './components/Sidebar';
import './styles.css';

function App() {
  const [books, setBooks] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [genreFilter, setGenreFilter] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/books')
      .then((response) => response.json())
      .then((data) => {
        // 🛠️ Convert _id to id for frontend compatibility
        const normalizedBooks = data.map(book => ({
          ...book,
          id: book._id,
        }));
        setBooks(normalizedBooks);

        const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(savedFavorites.map(fav => ({
          ...fav,
          id: fav._id || fav.id, // ensure compatibility with older storage
        })));
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching books:', error);
        setLoading(false);
      });
  }, []);

  const addToFavorites = (book) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = [...prevFavorites, book];
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };

  const removeFromFavorites = (bookId) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = prevFavorites.filter((book) => book.id !== bookId);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };

  const filteredBooks = books.filter((book) => {
    return (
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (genreFilter ? book.genre === genreFilter : true)
    );
  });

  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="main-content">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <GenreFilter genreFilter={genreFilter} setGenreFilter={setGenreFilter} />
          {loading ? (
            <div>Loading books...</div>
          ) : (
            <Routes>
              <Route
                path="/"
                element={
                  <div className="home">
                  <h1>Welcome to the Book Library</h1>
                  <p className="home-description">
                  Discover and explore a wide range of books across various genres. Use the search bar and genre filter to find your favorites, and save the ones you love for quick access later!
                  </p>
                  </div>
                  }
              />

              <Route
                path="/books"
                element={
                  <BookList
                    books={filteredBooks}
                    addToFavorites={addToFavorites}
                    removeFromFavorites={removeFromFavorites}
                  />
                }
              />
              <Route
                path="/books/:id"
                element={<BookDetail books={books} />}
              />
              <Route
                path="/favorites"
                element={
                  <FavoritesList
                  favorites={favorites}
                  removeFromFavorites={removeFromFavorites}
                  />
                }
              />
            </Routes>
          )}
        </div>
      </div>
    </Router>
  );
}

export default App;

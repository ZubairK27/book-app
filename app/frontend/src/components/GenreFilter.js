import React, { useEffect, useState } from 'react';

const GenreFilter = ({ genreFilter, setGenreFilter }) => {
  const [genres, setGenres] = useState(['All']);

  useEffect(() => {
    fetch('http://localhost:5000/api/genres')
      .then((res) => res.json())
      .then((data) => setGenres(['All', ...data]))
      .catch((err) => console.error('Error fetching genres:', err));
  }, []);

  const handleChange = (event) => {
    setGenreFilter(event.target.value);
  };

  return (
    <div>
      <label htmlFor="genre-filter">Filter by Genre: </label>
      <select id="genre-filter" value={genreFilter} onChange={handleChange}>
        {genres.map((genre, index) => (
          <option key={index} value={genre === 'All' ? '' : genre}>
            {genre}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GenreFilter;

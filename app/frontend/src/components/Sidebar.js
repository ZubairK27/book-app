import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css'; // Import CSS for the sidebar styling

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Book Library</h2>
      <nav>
        <ul>
          <li>
            <Link to="/books">Books List</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;

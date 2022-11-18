import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import './App.css';
import Categories from './components/Categories';
import BookPage from './components/BookPage';

const App = () => (
  <div>
    <nav className="Navigation d-flex">
      <ul className="d-flex">
        <li><h1><Link to="/">BookStore CMS</Link></h1></li>
        <li><Link to="/">BOOKS</Link></li>
        <li><Link to="/">CATEGORIES</Link></li>
      </ul>
      <span className="userProfile-container d-flex">
        <FaUserAlt style={{
          color: '#0290ff',
          height: '15px',
          cursor: 'pointer',
          transition: 'all ease-in 300ms',
        }}
        />
      </span>
    </nav>
    <Routes>
      <Route exact path="/" element={<BookPage />} />
      <Route exact path="/categories" element={<Categories />} />
    </Routes>
  </div>
);

export default App;

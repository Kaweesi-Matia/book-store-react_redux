import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/books';

const Book = ({ book }) => {
  const {
    title, author, id, category,
  } = book;
  const dispatch = useDispatch();
  const RemoveDisplayedBook = () => {
    dispatch(deleteBook(id));
  };

  return (
    <li key={id}>
      <p>
        Book:
        {title}
      </p>
      <p>
        Author:
        {author}
      </p>
      <p>
        Category:
        {' '}
        {category}
      </p>
      <button type="button" onClick={RemoveDisplayedBook}>
        Remove
      </button>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;

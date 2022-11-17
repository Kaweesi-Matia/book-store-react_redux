import React from 'react';
import PropTypes from 'prop-types';

const Book = ({
  category, title, author, id, RemoveDisplayedBook,
}) => (
  <>
    <h4>{category}</h4>
    <h3>{title}</h3>
    <h4>{author}</h4>
    <button type="button">Comment</button>
    <button type="button" onClick={() => RemoveDisplayedBook(id)}>Remove</button>
    <button type="button">Edit</button>
    <hr />
  </>
);

Book.propTypes = {
  category: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  id: PropTypes.number,
  RemoveDisplayedBook: PropTypes.func,
};

Book.defaultProps = {
  category: '',
  title: '',
  author: '',
  id: '',
  RemoveDisplayedBook: null,
};
export default Book;

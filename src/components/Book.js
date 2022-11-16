import React from 'react';
import PropTypes from 'prop-types';

const Book = ({
  title, author, id, RemoveDisplayedBook,
}) => (
  <>
    <h3>{title}</h3>
    <h4>{author}</h4>
    <button type="button">Comment</button>
    <button type="button" onClick={() => RemoveDisplayedBook(id)}>Remove</button>
    <button type="button">Edit</button>
    <hr />
  </>
);

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  id: PropTypes.number,
  RemoveDisplayedBook: PropTypes.func,
};

Book.defaultProps = {
  title: '',
  author: '',
  id: '',
  RemoveDisplayedBook: null,
};
export default Book;
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { deleteBook } from '../redux/books/books';

const BookItem = ({ book }) => {
  const {
    title, author, id, category,
  } = book;
  const dispatch = useDispatch();

  const RemoveDisplayedBook = () => {
    dispatch(deleteBook(id));
  };

  const chapterValue = Math.round(Math.random() * 10);

  return (
    <li key={id} className="d-flex">
      <div className="first_Column">
        <p className="category">{category}</p>
        <p className="title">{title}</p>
        <p className="Author" required>
          {author}
        </p>
        <div className="firstCol_buttons">
          <button type="button">Comment</button>
          <button type="button" onClick={RemoveDisplayedBook}>
            Remove
          </button>
          <button type="button">Edit</button>
        </div>
      </div>
      <ul className="second_column d-flex">
        <li>
          <div style={{ width: 90, height: 90 }}>
            <CircularProgressbar value={Math.round((chapterValue / 10) * 100)} />
          </div>
        </li>
        <li>
          <p className="percentage_value">
            {Math.round((chapterValue / 10) * 100)}
            %
          </p>
          <p className="completed">completed</p>
        </li>
        <li>
          <div className="last_column">
            <p className="current_chapter">CURRENT CHAPTER</p>
            <p id="chapter">
              Chapter
              {' '}
              {chapterValue }
            </p>
            <button type="button">UPDATE PROGRESS</button>
          </div>
        </li>
      </ul>
    </li>
  );
};

BookItem.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookItem;

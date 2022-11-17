import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooksList } from '../redux/books/books';
import Book from './Book';

const Books = () => {
  const dispatch = useDispatch();
  const bookList = useSelector((state) => state.booksReducer);

  useEffect(() => {
    dispatch(fetchBooksList());
  }, [dispatch]);

  return (
    <ul className="books-list">
      {bookList
        ? bookList.map((book) => <Book key={book.id} book={book} />)
        : 'Loading...'}
    </ul>
  );
};

export default Books;

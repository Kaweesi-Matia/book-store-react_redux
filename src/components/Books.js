import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooksList } from '../redux/books/books';
import BookItem from './Book';

const Books = () => {
  const dispatch = useDispatch();
  const bookList = useSelector((state) => state.booksReducer);

  useEffect(() => {
    dispatch(fetchBooksList());
  }, [dispatch]);

  return (
    <ul className="booksList_section">
      {bookList
        ? bookList.map((book) => <BookItem key={book.id} book={book} />)
        : 'Loading...'}
    </ul>
  );
};

export default Books;

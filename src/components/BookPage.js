import React from 'react';
import { useSelector } from 'react-redux';
import AddNewBook from './NewBook';
import Books from './Books';

const BookPage = () => {
  const bookList = useSelector((state) => state.bookReducer);
  return (
    <div className="books">
      <Books bookList={bookList} />
      <AddNewBook />
    </div>
  );
};

export default BookPage;

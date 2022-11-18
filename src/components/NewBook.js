import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { postBook } from '../redux/books/books';

const AddNewBook = () => {
  const [inputValues, setInputValues] = useState({
    title: '',
    author: '',
    id: '',
    category: '',
  });
  const dispatch = useDispatch();
  const [errorMsg, setError] = useState('');

  const submitBookToStore = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const { title, author, category } = inputValues;
    const newBook = {
      id,
      title,
      author,
      category,
    };

    if (newBook.title.trim().length === 0) {
      setError(' Add a book title please...');
      setInputValues(newBook);
    } else if (newBook.category === '') {
      setError(' Select a Book Category please...');
      setInputValues(newBook);
    } else {
      setError('');
      dispatch(postBook(newBook));
      setInputValues({
        title: '',
        author: '',
        id: '',
        category: '',
      });
      document.querySelector('.add_book-section').reset();
    }
  };

  const onChange = (e) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="hr" />
      <form className="add_book-section d-flex" onSubmit={submitBookToStore}>
        <h1>ADD NEW BOOK</h1>
        <div className="add_book d-flex">
          <input
            type="text"
            placeholder="Book title"
            name="title"
            onChange={onChange}
            required
          />
          <input
            type="text"
            placeholder="Book author"
            name="author"
            onChange={onChange}
            required
          />
          <select name="category" onChange={onChange} required>
            <option value="" hidden>
              Category
            </option>
            <option value="">Category</option>
            <option value="Service">Service</option>
            <option value="Fiction">Fiction</option>
            <option value="Classic">Classic</option>
            <option value="Economy">Economy</option>
          </select>
          <button type="submit" onClick={submitBookToStore}>
            Add Book
          </button>
        </div>
        <small>{errorMsg}</small>
      </form>
    </>
  );
};

export default AddNewBook;

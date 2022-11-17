import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
// eslint-disable-next-line import/named
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
      setError('Add a title please...');
      setInputValues(newBook);
    } else if (newBook.category === '') {
      setError('Select a category please...');
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
    }
  };

  const onChange = (e) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="add-book" onSubmit={submitBookToStore}>
      <h1>ADD NEW BOOK</h1>
      <input
        type="text"
        placeholder="Book Title"
        name="title"
        onChange={onChange}
        required
      />

      <input
        type="text"
        placeholder="Book Author"
        name="author"
        onChange={onChange}
        required
      />
      <select
        placeholder="categories"
        name="category"
        onChange={onChange}
        required
      >
        <option value="">Category</option>
        <option value="Service">Service</option>
        <option value="Fiction">Fiction</option>
        <option value="Classics">Classics</option>
        <option value="Economy">Economy</option>
      </select>
      <button type="submit" onClick={submitBookToStore}>
        Add Book
      </button>
      <small>{errorMsg}</small>
    </form>
  );
};

export default AddNewBook;

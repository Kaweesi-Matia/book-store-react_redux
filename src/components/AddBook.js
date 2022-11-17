import { React, useState } from 'react';
import { PropTypes } from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const AddBook = ({ AddNewBook }) => {
  const [NewBook, setNewBook] = useState({ title: '', author: '', category: '' });

  return (
    <div id="form_container">
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={(e) => {
        AddNewBook(e, NewBook);
        AddNewBook(e, { ...NewBook, item_id: uuidv4() });
      }}
      >
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={NewBook.title}
          required
          onChange={(e) => setNewBook({ ...NewBook, title: e.target.value })}
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={NewBook.author}
          required
          onChange={(e) => setNewBook({ ...NewBook, author: e.target.value })}
        />
        <select onChange={(e) => setNewBook({ ...NewBook, category: e.target.value })} required>
          <option value="">Category</option>
          <option value="Service">Service</option>
          <option value=" Fiction"> Fiction</option>
          <option value="Classics">Classics</option>
        </select>
        <button type="submit" id="add_book">ADD BOOK</button>
      </form>
    </div>
  );
};
AddBook.propTypes = {
  AddNewBook: PropTypes.func.isRequired,
};

export default AddBook;

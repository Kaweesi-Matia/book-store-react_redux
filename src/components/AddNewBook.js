import React from 'react';

const AddNewBook = () => (
  <div>
    <h2>Add New Book</h2>
    <input type="text" placeholder="Book title" />
    <input type="text" placeholder="author" />
    <form action="#">
      <select name="books" id="books">
        <option value="">Category</option>
        <option value="biography">Biography</option>
        <option value="Title">Title</option>
        <option value="description">Description</option>
        <option value="health">Health</option>

      </select>

      <button type="submit">Add Book</button>
    </form>
  </div>
);
export default AddNewBook;

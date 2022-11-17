import { combineReducers, applyMiddleware } from 'redux';
import { createStore } from '@reduxjs/toolkit';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import CategoriesReducer from './categories/categories';
import booksReducer from './books/books';

const reducer = combineReducers({
  booksReducer,
  CategoriesReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;

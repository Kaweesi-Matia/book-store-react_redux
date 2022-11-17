import { configureStore, combineReducers } from '@reduxjs/toolkit';
import BooksReducer from './books/books';
import CategoriesReducer from './categories/categories';

const allReducers = combineReducers({
  BooksReducer, CategoriesReducer,
});
const store = configureStore({
  reducer: allReducers,
  devTools: process.env.NODE_ENV !== 'production',
});
export default store;

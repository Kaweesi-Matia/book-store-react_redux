import { createStore, combineReducers } from 'redux';
import BooksReducer from './books/books';
import CategoriesReducer from './categories/categories';

const AllReducers = combineReducers({
  BooksReducer, CategoriesReducer,
});
export default function configureStore() {
  const store = createStore(AllReducers);
  return store;
}

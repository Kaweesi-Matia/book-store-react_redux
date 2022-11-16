const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const books = [
  { id: 1, author: 'Kaweesi Matia', title: 'The World Of Technology' },
  { id: 2, author: 'Bimal Jalal', title: 'The India Story' },
  { id: 3, author: 'Ruskin Bond', title: 'Listen to Your Heart: The London Adventure' },
  { id: 4, author: 'Vinit Karnik ', title: 'Business of Sports: The Winning Formula for Success' },
];

export const AddBookFunction = (NewBook) => ({
  type: ADD_BOOK,
  payload: NewBook,
});
export const RemoveBookFunction = (id) => ({
  type: REMOVE_BOOK,
  id,
});

const BooksReducer = (state = books, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: Date.now(),
          title: action.payload.title,
          author: action.payload.author,
        },
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default BooksReducer;

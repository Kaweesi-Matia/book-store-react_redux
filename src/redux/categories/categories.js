// const CHECK_STATUS = 'bookStore/categories/CHECK_STATUS';

// const categoriesState = { categories: [], showState: false };
// export const checkStatus = () => ({
//   type: CHECK_STATUS,
//   showState: false,
// });

// const checkReducer = (state = categoriesState, { type }) => {
//   switch (type) {
//     case CHECK_STATUS:
//       return { categories: ['Under construction...'] };
//     default:
//       return state;
//   }
// };

// export default checkReducer;
const CHECK_STATUS = 'CHECK_STATUS';

const categories = [];

export const CheckStatusFunction = () => ({
  type: CHECK_STATUS,
});

const CategoriesReducer = (state = categories, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return ['Under construction'];
    default: return state;
  }
};
export default CategoriesReducer;

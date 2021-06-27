// Action types
export const GET_RESTAURANTS = 'GET_RESTAURANTS';

// Action creators
export const getRestaurants = restaurants => ({
  type: GET_RESTAURANTS,
  restaurants,
});

// Reducer for products
export default function (state = [], action) {
  switch (action.type) {
    case GET_RESTAURANTS:
      return action.restaurants;
    default:
      return state;
  }
}

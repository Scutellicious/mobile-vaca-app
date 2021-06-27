// Action types
export const SET_RESTAURANTS = 'SET_RESTAURANTS';

// Action creators
export const setRestaurants = () => ({
  type: SET_RESTAURANTS,
});

const initialState = [
  'www.restaurant1.com',
  'www.restaurant2.com',
  'www.restaurant3.com',
];

// Reducer for restaurants
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_RESTAURANTS:
      return [...initialState];
    default:
      return state;
  }
}

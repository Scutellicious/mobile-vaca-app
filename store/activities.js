// Action types
export const GET_ACTIVITIES = 'GET_ACTIVITIES';

// Action creators
export const setActivities = activities => ({
  type: GET_ACTIVITIES,
  activities,
});

const initialState = [
  'www.theparthenon.com',
  'www.someplantation.com',
  'www.nearbyhike.com',
];
// Reducer for products
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ACTIVITIES:
      return [...initialState];
    default:
      return state;
  }
}

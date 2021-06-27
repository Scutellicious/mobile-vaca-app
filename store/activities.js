// Action types
export const GET_ACTIVITIES = 'GET_ACTIVITIES';

// Action creators
export const getActivities = activities => ({
  type: GET_ACTIVITIES,
  activities,
});

const initialState = [
  'www.restaurant1.com',
  'www.restaurant2.com',
  'www.restaurant3.com',
];
// Reducer for products
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ACTIVITIES:
      return action.activities;
    default:
      return state;
  }
}

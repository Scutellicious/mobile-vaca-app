// Action types
export const SET_RESTAURANTS = 'SET_RESTAURANTS';

// Action creators
export const setRestaurants = () => ({
  type: SET_RESTAURANTS,
});

const initialState = [
  {
    name: 'Pelican and Pig',
    url: 'https://www.pelicanandpig.com/',
    geo: {
      latitude: 36.18926,
      longitude: -86.74633,
    },
  },
  {
    name: 'Whiskey Kitchen',
    url: 'https://www.mstreetnashville.com/whiskey-kitchen',
    geo: {
      latitude: 36.15549,
      longitude: -86.78647,
    },
  },
  {
    name: 'Black Dynasty Ramen',
    url: 'https://blackdynastyramen.com/',
    geo: {
      latitude: 36.15234,
      longitude: -86.83568,
    },
  },
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

// Action types
export const GET_ACTIVITIES = 'GET_ACTIVITIES';

// Action creators
export const setActivities = activities => ({
  type: GET_ACTIVITIES,
  activities,
});

const initialState = [
  {
    name: 'The Parthenon: art museum',
    url: 'https://www.nashville.gov/Parks-and-Recreation/Parthenon.aspx',
    geo: {
      latitude: 36.146851,
      longitude: -86.808818,
    },
  },
  {
    name: 'Boot Barn',
    url: 'https://www.bootbarn.com/homepage?ef_id=CjwKCAjww-CGBhALEiwAQzWxOqN-N1BKgQyp5sKiRItQFHSM05rvqE_Moi3yxIXSrcqeBHfrVsWqhhoC970QAvD_BwE:G:s&gclid=CjwKCAjww-CGBhALEiwAQzWxOqN-N1BKgQyp5sKiRItQFHSM05rvqE_Moi3yxIXSrcqeBHfrVsWqhhoC970QAvD_BwE',
    geo: {
      latitude: 36.1613356,
      longitude: -86.7769214,
    },
  },
  {
    name: 'Country Music Hall of Fame',
    url: 'https://countrymusichalloffame.org/',
    geo: {
      latitude: 36.158292,
      longitude: -86.776913,
    },
  },
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

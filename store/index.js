// import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, createStore} from 'redux';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import {configureStore} from '@reduxjs/toolkit';

import restaurants from './restaurants';
import activities from './activities';

const reducers = combineReducers({
  restaurants: restaurants,
  activities: activities,
});

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
// };

// const persistedReducer = persistReducer(persistConfig, reducers);

// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: getDefaultMiddleware => {
//     const middlewares = getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     });

//     if (__DEV__ && !process.env.JEST_WORKER_ID) {
//       const createDebugger = require('redux-flipper').default;
//       middlewares.push(createDebugger());
//     }

//     return middlewares;
//   },
// });

// const persistor = persistStore(store);
const store = createStore(reducers);
export default store;

// export {store, persistor};

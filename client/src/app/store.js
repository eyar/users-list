import { configureStore } from '@reduxjs/toolkit';
import dataReducer from '../features/data/dataSlice';
import userDetailsReducer from '../features/userDetails/userDetailsSlice';
import darkModeReducer from '../features/darkMode/darkModeSlice';

export default configureStore({
  reducer: {
    data: dataReducer,
    userDetails: userDetailsReducer,
    darkMode: darkModeReducer
  },
});

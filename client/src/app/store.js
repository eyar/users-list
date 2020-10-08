import { configureStore } from '@reduxjs/toolkit';
import dataReducer from '../features/data/dataSlice';
import userDetailsReducer from '../features/userDetails/userDetailsSlice';

export default configureStore({
  reducer: {
    data: dataReducer,
    userDetails: userDetailsReducer,
  },
});

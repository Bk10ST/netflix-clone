import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
//step 77 change createslice to userslice
//step 78 got to createslice and change name to userslice
export const store = configureStore({
  reducer: {
    user : userReducer,
  },
});

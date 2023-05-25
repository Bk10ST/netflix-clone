import { createSlice } from '@reduxjs/toolkit';




//step 78
export const userSlice = createSlice({
  name: 'user',
  initialState :{
    //step 79 
    user: null,
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    //step 80
    login : (state , action) =>{
      state.user = action.payload;
    },
    logout: (state) =>{
      state.user = null;
    }
  },
});

//step 81
export const { login , logout } = userSlice.actions;

//step 82
//selector will give value we need 


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectUser = (state) => state.user.user;

//step 83 app.js

export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
loginState: false,
 
};

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setloginState: (state,action) => {
      state.loginState = action.payload;
    }
  },
});

export const { setloginState } = AuthSlice.actions;
export default AuthSlice.reducer;

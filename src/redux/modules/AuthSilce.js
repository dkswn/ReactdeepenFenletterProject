import {createSlice} from "@reduxjs/toolkit";



const initialState = {  // 초기값
    loginState: false,
    logoutState: true,
}
export const AuthSlice = createSlice({
    name:'auth',
    initialState,
    reducers: {
        loginState:(state) =>{
            state.isLogin = true;
        },
        LogoutState: (state) => {
            state.isLogin = false;
        },
    },
    
});

export const {loginState, logoutState} = AuthSlice.actions;
export const slelectLoginState = (state) => state.auth.loginState ;
export default AuthSlice.reducers;
  



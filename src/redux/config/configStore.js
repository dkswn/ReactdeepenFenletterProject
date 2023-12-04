import { configureStore } from "@reduxjs/toolkit";
import lettersSlice from "redux/modules/lettersSlice";
import memberSlice from "redux/modules/memberSlice";
import AuthSilce from "redux/modules/AuthSilce";


const store = configureStore({
   reducer: {AuthSilce,memberSlice,lettersSlice}
})

export default store;

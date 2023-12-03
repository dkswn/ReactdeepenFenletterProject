import { createSlice } from "@reduxjs/toolkit";

// const SET_MEMBER = "member/SET_MEMBER";


// export const setMember = (payload) => {
//   return { type: SET_MEMBER, payload };
// };

const initialState = "카리나";

export const memberSlice = createSlice({ // export default memberSlice.reducer;  부분임
  name: "members",
    initialState,
    reducers: (state,action) => {
      switch (action.type) {
            case state.setMember:
              const activeMember = action.payload;
              return activeMember;
            default:
              return state;
          }
        }
});
// const member = (state = initialState, action) => {
//   switch (action.type) {
//     case SET_MEMBER:
//       const activeMember = action.payload;
//       return activeMember;
//     default:
//       return state;
//   }
// };
export const {setMember} = memberSlice.actions;
export default memberSlice.reducer; 

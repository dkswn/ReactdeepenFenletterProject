import { createSlice } from "@reduxjs/toolkit";

const initialState = "카리나";

export const memberSlice = createSlice({ // export default memberSlice.reducer;  부분임
  name: "members",
    initialState,
    reducers: {
      setMember: (state,action) => {
          const activeMember = action.payload;
          return activeMember;
      }
    }
});

export const {setMember} = memberSlice.actions;
export default memberSlice.reducer; 

// switch (action.type) {
//   case state.setMember:
//     const activeMember = action.payload;
//     return activeMember;
//   default:
//     return state;
// }
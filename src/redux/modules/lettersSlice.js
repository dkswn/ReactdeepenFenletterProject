import fakeData from "fakeData.json";
import {createSlice} from "@reduxjs/toolkit"

const initialState = fakeData;
const lettersSlice = createSlice({
  name: "letters",
  initialState,
  reducers:{
    addLetter: (state,action) =>{
      const newLetter = action.payload;
      return [newLetter, ...state]; 
    },
    deleteLetter: (state,action) => {
      const letterId = action.payload;
      return state.filter((letter)=>letter.id !== letterId);
    },
    editLetter: (state,action) => {
      const {id, editingText} = action.payload;
      return state.map((letter)=>
        letter.id === id ? {...letter, content: editingText} : letter);
    }
  },
});

// // 팬레터 추가
// const ADD_LETTER = "letters/ADD_LETTER";
// // 팬레터 삭제
// const DELETE_LETTER = "letters/DELETE_LETTER";
// // 팬레터 수정
// const EDIT_LETTER = "letters/EDIT_LETTER";
  
   // 기존의 reducer
//   (state,action) => {
//     switch (action.type) {
//           case state.addLetter:
//             const newLetter = action.payload;
//             return [newLetter, ...state];
//           case state.deleteLetter:
//             const letterId = action.payload;
//             return state.filter((letter) => letter.id !== letterId);
//           case state.editLetter:
//             const { id, editingText } = action.payload;
//             return state.map((letter) => {
//               if (letter.id === id) {
//                 return { ...letter, content: editingText };
//               }
//               return letter;
//             });
//           default:
//             return state;
        
//   }
// })
// 기존 action creator 
// const letters = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_LETTER:
//       const newLetter = action.payload;
//       return [newLetter, ...state];
//     case DELETE_LETTER:
//       const letterId = action.payload;
//       return state.filter((letter) => letter.id !== letterId);
//     case EDIT_LETTER:
//       const { id, editingText } = action.payload;
//       return state.map((letter) => {
//         if (letter.id === id) {
//           return { ...letter, content: editingText };
//         }
//         return letter;
//       });
//     default:
//       return state;
//   }
// };
// action create를 컴포넌트에서 사용하기 위해 export
export const { addLetter,deleteLetter, editLetter} = lettersSlice.actions; 
// configStore에 등록하기 위한 reducer
export default lettersSlice.reducer;

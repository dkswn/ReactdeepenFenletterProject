import { useSelector } from "react-redux";
import Router from "shared/Router";


const App = () =>{
   const lettersSlice = useSelector((state)=> state.lettersSlice);
   console.log("letterSlice",lettersSlice)
   const AuthSlice = useSelector((state)=> state.AuthSlice);
   console.log("AuthSlice",AuthSlice);
   const memberSlice = useSelector((state)=> state.memberSlice)
   console.log("memberSlice", memberSlice);
  return <Router />;
}

export default App;

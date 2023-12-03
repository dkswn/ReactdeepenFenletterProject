import Detail from "pages/Detail";
import Home from "pages/Home";
import Profile from "pages/Profile"
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {  useSelector } from "react-redux"; 
import {slelectLoginState} from "redux/modules/AuthSilce";
import { useEffect } from "react";



export default function Router() {
      const auth = useSelector(slelectLoginState);
            console.log("로그인 값",auth);
    useEffect((auth)=>{
      if(!auth) {
        alert("로그인이 필요합니다.");
      }
    }, []);

  return (
    <BrowserRouter>
      <Routes>
      <Route path="*" element={ slelectLoginState ? (
        <>
           <Route path="/" element={<Home />} />
           <Route path="/detail/:id" element={<Detail />} />
           <Route path="/profile/:id" element={<Profile/>} />
        </>
      ) : (
        <Navigate to="/login"/>
      )
      }
      />
      </Routes>
    </BrowserRouter>
  );
}

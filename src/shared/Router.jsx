import Detail from "pages/Detail";
import Home from "pages/Home";
import Profile from "pages/Profile";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import { setloginState } from "redux/modules/AuthSilce";
import Login from "pages/Login";



export default function Router() {
  const dispatch = useDispatch();
  useSelector((state) => state.setloginState);
  console.log("로그인 상태", setloginState);  // undefinded 

  useEffect(() => {
    if (setloginState === false) {
      dispatch(setloginState(true));
    }
  }, [ dispatch]); // 의존성 배열  렌더링 부분 error

  return (
    <BrowserRouter>
      <Routes>
        {!setloginState ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/login" element={<Login />} />
          </>
        ) : (
          <>
        <Route path="/" element={<Navigate to="/Login"/> } />
        <Route path="/home" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/profile/:id" element={<Profile />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

import React from "react";
import {withRouter} from "react-router-dom";

function LogoutButton({logout, history}){
    const onClickLogoutHandler = () => {
        logout(); // 로그아웃 프롭스를 불러와서 로그아웃 버튼 누를시 user state값이 비워짐
        history.push("/") // default 경로로 이동됨
    };
    return <button onClick={onClickLogoutHandler}>로그아웃</button>
}

export default withRouter(LogoutButton);
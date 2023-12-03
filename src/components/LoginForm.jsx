import React from 'react';
import styled from "styled-components";
import { useState ,useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector, useNavigate  } from 'react-redux';
import { loginState,logoutState } from 'redux/modules/AuthSilce';


 export const LoginForm = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [Loading, setLoading] = useState(false)
 


 
    const OnSubmitHandler = async(e) =>{
        e.preventdefault();
        navigate("/LgoinForm");
       try{
      await axios("https://moneyfulpublicpolicy.co.kr/login?expiresin=1m",{id:id, password:password}).then((res,error)=>{
        dispatch(LoginForm());
      if(res.message === "이미 존재하는 유저 id입니다.") {
        alert("이미 존재하는 아이디입니다, 다른 아이디 값을 입력해주세요.");
    } else if (error.res && error.res.status === 401 ) {
         alert("클라이언트가 인증되지 않았거나, 유효한 인증 정보가 부족합니다.");
    } else if (error.res && error.res.status === 404) {
        alert("서버는 존재하지만 서버에서 요청한 것을 찾을 수 없습니다.")
    } else if (error.res && error.res.status === 505){
         alert("500오류 또는 기타 오류 입니다.")
    }
        })} catch(error) {
            console.log("Error message:",error.message);
        }
      
    };
 
     useEffect(()=>{
        OnSubmitHandler();  // form 태그 onSubmit 불러오기
    },[])


    const OnidChangeHandler = (event) => {
        setId(event.target.value);
    };
    const OnpasswordChangeHandler = (event) => {
        setPassword(event.target.value);
    };
    return (
        <>
           <LoginModalContainer>
            <FormContainer onSubmit={OnSubmitHandler}>
            <h1>회원가입</h1>
    <div>
    <input  type="text"value={id} onChange={OnidChangeHandler}  placeholder='아이디(4~10글자)' minLength={4}  maxLength={10}/>
    </div>
       <div>
       <input type="text" value={password} onChange={OnpasswordChangeHandler} placeholder='비밀번호(4~15글자)' minLength={4}  maxLength={15}/>
       </div>
       <div>
       <button type="submit" onClick={OnSubmitHandler}>로그인</button>
       </div>
       <div>
        <span type="button" onClick={navigate("/JoinForm")}>회원가입</span>
        </div>
        </FormContainer>
        </LoginModalContainer>
        </>
    )
}


const LoginModalContainer = styled.div`
text-align: center;
flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  /* 반투명한 배경 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;
const FormContainer = styled.form`
    background-color: gray;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 500px;
  border-radius: 12px;
  margin: 20px 0;
`;




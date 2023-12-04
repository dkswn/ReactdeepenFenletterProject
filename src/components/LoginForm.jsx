import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';




const LoginForm = () => {
    const dispatch = useDispatch();
    const setloginState = useSelector((state) => state.setloginState);
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();
       
  };

  const LoginHandler = async () => {
    try {
        const response = await axios.post("https://moneyfulpublicpolicy.co.kr/login", {
          id: id,
          password: password
        });
        if (response.data.message === "이미 존재하는 유저 입니다.") {
          alert("이미 존재하는 아이디입니다, 다른 아이디 값을 입력해주세요.");
        } else if (id === '' && password === '') {
                alert("아이디 비밀번호를 모두 입력하여 주세요")
                dispatch(setloginState(true));
        } else {  
            navigate("/");
        }
      } catch (error) {
        console.error("Error message:", error.message);
  
        if (error.response) {
          if (error.response.status === 401) {
            alert("클라이언트가 인증되지 않았거나, 유효한 인증 정보가 부족합니다.");
          } else if (error.response.status === 404) {
            alert("서버는 존재하지만 서버에서 요청한 것을 찾을 수 없습니다.");
          } else if (error.response.status === 500) {
            alert("500오류 또는 기타 오류 입니다.");
          }
        }
      }
  }

  useEffect(() => {
        onSubmitHandler();
  }, []);

  const onIdChangeHandler = (event) => {
    setId(event.target.value);
  };

  const onPasswordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const onNavigateToJoinForm = () => {
    navigate("/JoinForm");
  };

  return (
    <>
      <LoginModalContainer>
        <FormContainer onSubmit={onSubmitHandler}>
          <h1>로그인 창</h1>
          <div>
            <input type="text" value={id} onChange={onIdChangeHandler} placeholder='아이디(4~10글자)' minLength={4} maxLength={10} />
          </div>
          <div>
            <input type="text" value={password} onChange={onPasswordChangeHandler} placeholder='비밀번호(4~15글자)' minLength={4} maxLength={15} />
          </div>
          <div>
            <button  onClick={LoginHandler}type="submit">로그인</button>
          </div>
          <div>
            <button type="submit" onClick={onNavigateToJoinForm}>회원가입</button>
          </div>
        </FormContainer>
      </LoginModalContainer>
    </>
  );
};
export default LoginForm;

const LoginModalContainer = styled.div`
  text-align: center;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
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


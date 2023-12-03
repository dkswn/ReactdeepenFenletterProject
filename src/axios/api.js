import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
    timeout: 20000,
});
instance.interceptors.request.use(
    function(config){
        console.log("인터셉터 성공");
        return config;
    },
    function(error){
        console.log("인터셉터 요청 보류");
    },
)

instance.interceptors.response.use(
    // 응답을 내보내기 전 함수 
   function(response){
    console.log("인터셉터 응답 받았음");
    return response;
   },
);

export default instance;
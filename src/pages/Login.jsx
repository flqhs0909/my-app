import React, { useState } from 'react'

import { useNavigate } from "react-router-dom";


export default function Login() {
 const [userId , setUserId] = useState('');
 const [userPw ,setUserPw] = useState('');
 const [error , setError] = useState('');

 const navigate  =  useNavigate();
//  const adminId = (e) => {
//   setuserId(e.target.value )
// }
// const adminPw = (e) => {
//   setUserPw(e.target.value)
// }
const validate = () =>{
  if(!userId.trim()) {
    setError('아이디를 입력하세요');
    return false ;
  }
  if(!userPw.trim()){
    setError('비밀번호를 입력하세요')
    return false;
  }
  if (userPw.length < 6 ) {
    setError('비밀번호는 최소 6자이상이어야 합니다.') ;
    return false;
  }
 
  setError('');
  return true;

};


const handleLogin = async (e)=>{
 e.preventDefault();
  console.log("아이디",userId);
console.log("비밀번호",userPw);

 
if(!validate()) return;
  try{
      const response = await fetch( "http://localhost:8001/signIn",{
      method : 'POST',
      credentials:'include',
      headers: {
        "Content-Type": "application/json", // JSON 형식 요청임을 명시
          },
          body: JSON.stringify({
            adminId:userId,
            password:userPw,
          })
          
        })
        console.log("응답 상태 코드:", response.status);
        const data = await response.json();
        console.log("서버", data);
        if(data.state === true){
          navigate('/main', {replace: true} );
        }else { 
          setError('비밀번호가 맞지 않습니다.')
        }
  }catch(error){
    alert('서버에러')
   
  }

  

}


  return (
    <div className='loginPage'>
      <div className='loginAera'>
   
        <img src="../images/img_logo02.svg" alt="로고" />
    
        <form action="" className='user_info'>
          <strong>CRM 고객 DB 관리</strong>
          
          <input type="text" name="userId" id="userId" placeholder='아이디 입력' value={userId} onChange={(e)=>setUserId(e.target.value) }/>
          <input type="password" name="userPw" id="userPw" placeholder=' 비밀번호 입력'value={userPw} onChange={(e)=>setUserPw(e.target.value)} />
           {error && <p>{error}</p>}

          <button type="submit" className='btn_01'onClick={handleLogin} >로그인</button>
        </form>

      </div>
      <p>&copy; 2023 Team1985. All rights reserved.</p>
      
    </div>
  );
}



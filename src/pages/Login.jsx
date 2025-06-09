import React, { useState } from 'react'


export default function Login() {
 const [userId , setUserId] = useState('');
 const [userPw ,setUserPw] = useState('');

//  const adminId = (e) => {
//   setuserId(e.target.value )
// }
// const adminPw = (e) => {
//   setUserPw(e.target.value)
// }



const handleLogin = async (e)=>{
 e.preventDefault();
  console.log("아이디",userId);
console.log("비밀번호",userPw);
  try{
    const response = await fetch( "http://localhost:8001/signIn",{
     method : 'POST',
    headers: {
      "Content-Type": "application/json", // JSON 형식 요청임을 명시
        },
        body: JSON.stringify({
           userId,
           userPw,
        })
        
      })
      console.log("응답 상태 코드:", response.status);
      const data = await response.json();
      console.log("서버", data);
      if(data.success){
        alert('성공')
      }else { 
        alert('실패')
      }
  }catch(err){
    alert('에러')
  }

}


  return (
    <div className='loginPage'>
      <div className='loginAera'>
   
        <img src="../images/img_logo02.svg" alt="로고" />
    
        <form action="" className='user_info'>
          <p>CRM 고객 DB 관리</p>
          
          <input type="text" name="userId" id="userId" placeholder='아이디 입력' value={userId} onChange={(e)=>setUserId(e.target.value) }/>
          <input type="password" name="userPw" id="userPw" placeholder=' 비밀번호 입력'value={userPw} onChange={(e)=>setUserPw(e.target.value)} />

          <button type="submit" className='btn_01'onClick={handleLogin} >로그인</button>
        </form>

      </div>
      <p>&copy; 2023 Team1985. All rights reserved.</p>
      
    </div>
  );
}



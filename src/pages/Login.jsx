import React from 'react'


export default function Login() {
  return (
    <div className='loginPage'>
      <div className='loginAera'>
   
        <img src="../images/img_logo02.svg" alt="로고" />
    
        <form action="" className='user_info'>
          <p>CRM 고객 DB 관리</p>
          
          <input type="text" name="userId" id="userId" placeholder='아이디 입력' />
          <input type="password" name="userPw" id="userPw" placeholder=' 비밀번호 입력' />

          <button type="submit" className='btn_01' >로그인</button>
        </form>

      </div>
      <p>&copy; 2023 Team1985. All rights reserved.</p>
      
    </div>
  );
}



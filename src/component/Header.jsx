import React from 'react'

import {Link} from "react-router-dom";


export default function Header() {
  return (
  <header>
    <h1>
      <Link><img src="../images/img_logo.svg" alt="로고이미지" /></Link>
    </h1>
    <div>
      <b>고객 DB 관리 시스템</b>
      <div className='userSetting'>
        <strong>[사업지원팀] 홍길동</strong>
        <Link>정보변경</Link>
        <button>로그아웃</button>
      </div>
    </div>
  </header>
  )
}




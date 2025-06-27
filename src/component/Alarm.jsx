import React from 'react'

export default function Alarm() {
  return (
    <div>
        <div className='AlarmBox'>
            <img src="../images/btn_notice.svg" alt="알림" />
            <strong> 공지알림</strong>
            <time dateTime="2023-11-15 11:00">2023-11-15 11:00</time>
            <p>사업지원팀 공통 공지사항입니다~!</p>
        </div>
    </div>
  )
}

import React from 'react'

export default function PageName({PageTitle ,showBtn}) {

  return (
    <>
        <div className='h2Tit'>
            <h2>{PageTitle}</h2>
            {showBtn && <button className='btn_01'>대량 고객 등록</button>}
      </div>
    </>
  )
}

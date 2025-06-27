// import React, { useState } from 'react'


export default function TabInfo() {

    // const [currentTab , setCurrentTab ] = useState(0);


    const listDummy = [
        {   id:1 , 
            op :"분배(신규) " ,
            con : '주식교육 - 실전반 결제금액 150 결제일 23.09.01 특이사항 : 주식으로 돈버는 기술 - 실전반 (1년 무제한 이용권) + 데일리 실전강의 1년 무료',
            manager : '홍길동' ,
            reCall :'-',
            datatime :'2023/09/30 12:12'
        }

    ]

  return (
    <>
      
       
       <div className='arrayWrap'>
           <ul className='arrayListTit'>
              <li><input type="checkbox" name="" id="" /></li>
              <li>상담상태</li>
              <li>상담내용</li>
              <li>담당자</li>
              <li>재통화 예정일</li>
              <li>등록일시</li>
           </ul>
           <ul className='arrayListContant'>
            {
                listDummy.map((listDummy)=>{
                    return(
                        <li key={listDummy.id}>
                            <input type="checkbox" name="" id="" />
                            <b>{listDummy.op}</b>
                            <p>{listDummy.con}</p>
                            <strong>{listDummy.manager}</strong>
                            <i>{listDummy.reCall}</i>
                            <time>{listDummy.datatime}</time>

                        </li>
                    )

                })
            }
           </ul>
           </div>

    </>
  )
}

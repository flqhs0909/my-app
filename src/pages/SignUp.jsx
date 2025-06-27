import React from 'react'

import { Link } from 'react-router-dom'


import DataInput from '../component/DataInput'
import GrayBtn from '../component/GrayBtn'
import PointBtn from '../component/PointBtn'
import PayInfo from '../component/PayInfo'
import PageName from '../component/PageName'
import TabInfo from '../component/TabInfo'

export default function SignUp() {

      const tabMenuArr =[ 
        {id:1, name : 'tab1', content : 'tabCon1'},  
        {id:2, name : 'tab2',  content : 'tabCon2'},
        {id:3, name : 'tab3',  content : 'tabCon3'}
    ]
  
  return (
    <div className='container'>
      <PageName PageTitle='고객 등록' showBtn={true}></PageName>
      <form className='formWrap'>
        <b>기본정보</b>
        <section className='infoBox'>
          <div>
              <strong htmlFor='userOption'>고객구분</strong>
              <select name="userOption" id="">
                <option value="aa"><span>선택</span></option>
                <option value="bb">구분</option>
              </select>
          </div>
          <div>
            <strong htmlFor=''>상담상태</strong>
            <select name="" id="">
              <option value=""><span> 선택</span></option>
              <option value="">1</option>
            </select>
          </div>
          <div>
            <strong htmlFor="manager">영업담당자</strong>
            <input type="text" name="manager" id="manager" />
          </div>
          <div>
            <strong htmlFor="userName">고객명</strong>
            <input type="text" name="userName" id="userName" />
          </div>
          <div>
            <strong htmlFor="phone">휴대폰</strong>
            <input type="text" name="phone" id="phone" />
          </div>
          <DataInput label="체험기간"></DataInput>
          <div className='userMemo'>
            <strong htmlFor="">메모</strong>
            <textarea name="" id=""></textarea>
          </div>
        </section>
        <div className='btnBox'>
          <GrayBtn label='목록'/>
          <PointBtn label='저장'/> 
        </div>
      </form>

      {/* 결제정보 */}
      <PayInfo></PayInfo>
      {/* 관련정보 */}


      <details className='formWrap'>
        <summary>관련 정보</summary>
        <ul>
            {
            tabMenuArr.map((tabMenuArr)=> {
            return(
              <li key= {tabMenuArr.id }><Link/>{tabMenuArr.name}</li>
              )
            })
          }
        </ul>
            <TabInfo></TabInfo>
        </details>
    </div>
  )
}

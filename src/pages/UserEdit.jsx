import React from 'react'
import PageName from '../component/PageName'

import InputField from '../component/InputField'
import GrayBtn from '../component/GrayBtn'
import PointBtn from '../component/PointBtn'
 

export default function UserEdit({PageTitle}) {
  return (
    <div className=' container'>
        <PageName PageTitle='사용자 수정' showBtn ={false} />
        <form  className='formWrap' action="">
          <b>기본정보</b>
          <section className='inputBox'>
            <div>
              <strong htmlFor="userId">로그인 아이디</strong>
              <div>
                <input type="text" name="userId" id="userId" />
                <button>중복확인</button>
              </div>
            </div>
            <InputField label='사용자명' htmlFor='userName'  name='userName' id="userName" />
            <InputField label='휴대폰' htmlFor='phone'  name='phone' id="phone" />
            <InputField label='회원사' htmlFor='company'  name='company' id="company" value='(주)청개구리투자클럽' disabled/>
            <div>
              <strong htmlFor=''>사용자 구분</strong>
              <select name="" id="">
                <option value="aa"><span>선택</span></option>
                <option value="bb">구분</option>
              </select>
            </div>
            <div>
              <strong htmlFor=''>역할그룹</strong>
              <select name="" id="">
                <option value=""><span>선택</span></option>
                <option value="">구분</option>
              </select>
            </div>
            <InputField label='이메일' htmlFor=''  name='' id=""  />
            <div>
              <strong htmlFor=''>사용여부</strong>
              <select name="" id="">
                <option value=""><span>사용가능</span></option>
                <option value="">구분</option>
              </select>
            </div>
            <InputField label='부서' htmlFor=''  name='' id=""  disabled/>
            <div className='datainput'>
              <strong>입사일</strong>
              <div className='dateItem'>
                <input type="date" name="" id="" />
              </div>
            </div>
            <div className='userMemo'>
              <strong htmlFor="">비고</strong>
              <textarea name="" id=""></textarea>
            </div>
          </section>
  
            <div>
              <button type="button">임시비밀번호</button>
               <div className='btnBox'>
                  <GrayBtn label='목록'/>
                  <PointBtn label='저장' /> 
                </div>
            </div>
          

        </form>
      
    </div>
  )
}

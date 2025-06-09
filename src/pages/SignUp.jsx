import React from 'react'
import DataInput from '../component/DataInput'
import GrayBtn from '../component/GrayBtn'
import PointBtn from '../component/PointBtn'

export default function SignUp() {
  
  return (
    <div className='container'>
      <div className='h2Tit'>
        <h2>고객등록</h2>
        <button className='btn_01'>대량 고객 등록</button>
      </div>
      <form className='formWrap'>
        <b>기본정보</b>
        <section className='infoBox'>
          <div>
              <strong htmlFor='a'>고객구분</strong>
              <select name="a" id="">
                <option value="dd"><span>선택</span></option>
                <option value="ff">구분</option>
              </select>
          </div>
          <div>
            <strong htmlFor=''>상담상태</strong>
            <select name="" id="">
              <option value=""><span> 선택</span></option>
              <option value="">선택</option>
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
      <details className='formWrap'>
        <summary> 결제정보</summary>
          <form  >
           <section className=''>
              <div className='payInfoBox01'>
                <strong htmlFor="">매출 구분</strong>
                <select name="" id="">
                  <option value="">선택</option>
                  <option value="">1</option>
                </select>
              </div>
              {/* 결제구분 */}
              <div>
                <strong htmlFor="">결제구분</strong>
                 <div className='payItemBox'>
                    <div>
                      <input type="radio" name="pay01" id="payitm01" />
                      <label htmlFor='payitm01'>카드결제</label>
                    </div>
                    <div>
                      <input type="radio" name="pay01" id="payitm02" />
                      <label htmlFor='payitm02'> 현금결제 </label>
                    </div>
                    <div>
                      <input type="radio" name="pay01" id="payitm03" />
                      <label htmlFor='payitm03'> 카드/현금 분할결제 </label>
                    </div>
                    <div>
                      <input type="radio" name="pay01" id="payitm04" />
                      <label htmlFor='payitm04'>실전 렌탈</label>
                    </div>
                    <div>
                      <input type="radio" name="pay01" id="payitm05" />
                      <label htmlFor='payitm05'>초급 렌탈</label>
                    </div>
                    <div>
                      <input type="radio" name="pay01" id="payitm06" />
                      <label htmlFor='payitm06'>고급 렌탈</label>
                    </div>
                 </div>
                               
              </div>
           </section>
            {/* 결제구분 끝 */}
            <hr />
            <section>
              <div>
                <strong>결제금액</strong>
                <input type="text"  />
              </div>
              <div>
                <strong>결제일</strong>
                <input type="date" name="" id="" />
              </div>
            </section>
            <hr />
            <section>
                <div>
                  <strong>기간</strong>
                  <select name="" id="">
                    <option value="">선택</option>
                    <option value="">1</option>
                  </select>
                </div>
                <DataInput label="유료기간"/>
                <DataInput label="유료기간"/>
            </section>
            <hr />
            <section>
              <div className='analyst'>
                <strong>신청 애널리스트</strong>
                  <div>
                    <input type="radio" name="pay01" id="payitm03" />
                    <label htmlFor='payitm03'> [소액투자반] 김최우 </label>
                  </div>
                  <div>
                    <input type="radio" name="pay01" id="payitm03" />
                    <label htmlFor='payitm03'> 카드/현금 분할결제 </label>
                  </div>
                  <div>
                    <input type="radio" name="pay01" id="payitm03" />
                    <label htmlFor='payitm03'> 카드/현금 분할결제 </label>
                  </div>
                  <div>
                    <input type="radio" name="pay01" id="payitm03" />
                    <label htmlFor='payitm03'> 카드/현금 분할결제 </label>
                  </div>
                  <div>
                    <input type="radio" name="pay01" id="payitm03" />
                    <label htmlFor='payitm03'> 카드/현금 분할결제 </label>
                  </div>
                  <div>
                    <input type="radio" name="pay01" id="payitm03" />
                    <label htmlFor='payitm03'> 카드/현금 분할결제 </label>
                  </div>
                  <div>
                    <input type="radio" name="pay01" id="payitm03" />
                    <label htmlFor='payitm03'> 카드/현금 분할결제 </label>
                  </div>
                  <div>
                    <input type="radio" name="pay01" id="payitm03" />
                    <label htmlFor='payitm03'> 카드/현금 분할결제 </label>
                  </div>
                  <div>
                    <input type="radio" name="pay01" id="payitm03" />
                    <label htmlFor='payitm03'> 카드/현금 분할결제 </label>
                  </div>
                  <div>
                    <input type="radio" name="pay01" id="payitm03" />
                    <label htmlFor='payitm03'> 카드/현금 분할결제 </label>
                  </div>

              </div>
            </section>
            <hr />
            <section>
              <div className=''>
                  <strong htmlFor="">결제 특이사항</strong>
                  <textarea name="" id=""></textarea>
              </div>
            </section>
          </form >

      </details>



      
    </div>
  )
}

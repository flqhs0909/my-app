import React from 'react'
import DataInput from '../component/DataInput'
// import GrayBtn from '../component/GrayBtn'
import PointBtn from '../component/PointBtn'

export default function PayInfo() {
  return (
    <>
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
                    <strong htmlFor="">결제 구분</strong>
                     <div className='payItemBox'>
                        <div>
                          <input type="radio" name="pay01" id="payitm01" />
                          <label htmlFor='payitm01'>카드 결제</label>
                        </div>
                        <div>
                          <input type="radio" name="pay01" id="payitm02" />
                          <label htmlFor='payitm02'> 현금 결제 </label>
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
                        <input type="radio" name="analystList" id="anal01" />
                        <label htmlFor='anal01'> [소액투자반] 김최우 </label>
                      </div>
                      <div>
                        <input type="radio" name="analystList" id="anal02" />
                        <label htmlFor='anal02'> 청개구리투자자분 </label>
                      </div>
                      <div>
                        <input type="radio" name="analystList" id="anal03" />
                        <label htmlFor='anal03'> 청개구리투자자분 </label>
                      </div>
                      <div>
                        <input type="radio" name="analystList" id="anal04" />
                        <label htmlFor='anal04'>청개구리투자자분 </label>
                      </div>
                      <div>
                        <input type="radio" name="analystList" id="anal05" />
                        <label htmlFor='anal05'> 청개구리투자자분 </label>
                      </div>
                      <div>
                        <input type="radio" name="analystList" id="anal06" />
                        <label htmlFor='anal06'>청개구리투자자분 </label>
                      </div>
                      <div>
                        <input type="radio" name="analystList" id="anal07" />
                        <label htmlFor='anal07'>청개구리투자자분 </label>
                      </div>
                      <div>
                        <input type="radio" name="analystList" id="anal08" />
                        <label htmlFor='anal08'>청개구리투자자분  </label>
                      </div>
                      <div>
                        <input type="radio" name="analystList" id="anal09" />
                        <label htmlFor='anal09'> 청개구리투자자분 </label>
                      </div>
                      <div>
                        <input type="radio" name="analystList" id="anal10" />
                        <label htmlFor='anal10'> 청개구리투자자분 </label>
                      </div>
    
                  </div>
                </section>
                <hr />
                <section>
                    <div className='payText'>
                        <strong htmlFor="">결제 특이사항</strong>
                        <textarea name="" id=""></textarea>
                    </div>
                </section>
                <div className='payBtn'><PointBtn label="결제"></PointBtn></div>
            </form >
        </details>
      
      
    </>
  )
}

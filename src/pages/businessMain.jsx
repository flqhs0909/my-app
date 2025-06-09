import React from 'react'
import Alarm from '../component/Alarm'

export default function BusinessMain() {


   
  return (
    <div className='mainWrap'>
      <Alarm></Alarm>
      
      <h3>2023년 10월 매출 현황</h3>
      <section className='rangeWrap'>
        <div className='rangeArea'>
          <progress max={100}  value={70}></progress>
        </div>
        <div className='achieveArea'>
          <strong>매출달성금액</strong>
          <table>
            <tr>
              <th>투자금액</th>
              <td>3000000</td>
            </tr>
            <tr>
              <th>최소할당매출</th>
              <td>3000000</td>
            </tr>
            <tr>
              <th>목표매출</th>
              <td>12,000,000</td>
            </tr>
              <tr>
              <th>현재매출</th>
              <td>12,000,000</td>
            </tr>
          </table>
          <p>목표매출까지 3,400,000(30%)남음</p>
        </div>
    
        
      </section>
      <section className='tableArea'>
        <div className='tTit'>
          <h3>나의 투자/매출현황</h3>
          <div>
              <select name="" id="">
                <option value="">2023년</option>
                <option value="">2024년</option>
              </select>
              <select name="" id="">
                <option value="">10월</option>
              </select>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>분배일</th>
              <th>DB개수</th>
              <th>DB단가</th>
              <th>일 투자금액</th>
              <th>매출금액</th>
              <th>결제회원 수</th>
              <th>결제율</th>
              <th>ROAS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2023.10/01</td>
              <td>20</td>
              <td>50000</td>
              <td>18456465</td>
              <td>1800065</td>
              <td>1</td>
              <td>5%</td>
              <td>300%</td>
            </tr>
            <tr>
              <td>2023.10/01</td>
              <td>20</td>
              <td>50000</td>
              <td>18456465</td>
              <td>16400065</td>
              <td>1</td>
              <td>5%</td>
              <td>300%</td>
            </tr>
         

          </tbody>
          
        </table>
      </section>

    </div>
  )
}



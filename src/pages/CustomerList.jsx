import React from "react";

import Search from "../component/Search";
import PageName from "../component/PageName";

const members = [
  { label: "무료회원", class: "free" },
  { label: "VIP회원", class: "vip" },
  { label: "VVIP회원", class: "vvip" },
  { label: "소액투자반", class: "invest" },
  { label: "교육", class: "edu" },
  { label: "S클럽", class: "sclub" },
  { label: "환불방어매출", class: "refund" },
];
const payList = [
  {
    id: "1",
    num: "123",
    tell: "0101234567",
    name: "홍길동",
    manager: "청개구리",
    customer: "환불방어매출",
    counsel: "불량(신청한적없음)",
    freedata: "2303/09/01",
    freeenddata: "2023/09/01",
    paydata: "2023/09/01",
    payend: "2023/09/01",
  },
];
export default function CustomerList() {
  return (
    <div className="container">
      <PageName PageTitle="통합 고객 목록" shouldShow={true} label_btn="추가" />
      {/* 검색항목 */}
      <Search></Search>
      <section>
        <div className="catalogList">
          <h3>목록</h3>
          <ul>
            <li>
              <button className="btn_03" type="button">
                엑셀다운로드
              </button>
            </li>
            <li>
              <button className="btn_03" type="button">
                중복고객 삭제
              </button>
            </li>
            <li>
              <button className="btn_03" type="button">
                검색고객 삭제
              </button>
            </li>
            <li>
              <button className="btn_03" type="button">
                검색고객 수신거부
              </button>
            </li>
            <li>
              <button className="btn_03" type="button">
                대량고객수정
              </button>
            </li>
          </ul>
        </div>
        <ul className="members">
          {members.map((item) => {
            return <li className={item.class}>{item.label}</li>;
          })}
          {/* <li>VIP회원</li>
          <li>VVIP회원</li>
          <li>소액투자반</li>
          <li>교육</li>
          <li>S클럽</li>
          <li>환불방어매출</li> */}
        </ul>
        <div className="listOption">
          <div className="totalPage">
            <strong>총 123건</strong>
            <small>(1/10page)</small>
          </div>
          <div>
            <div>
              <b>선택 1건</b>
              <select name="" id="">
                <option value="">영업담당자</option>
              </select>
              <select name="" id="">
                <option value="">선택</option>
              </select>
              <button type="button" className="btn_03">
                선택변경
              </button>
            </div>
            <div>
              <button type="button" className="btn_03">
                선택삭제
              </button>
              <button type="button" className="btn_03">
                선택 수신거부
              </button>
            </div>
          </div>
        </div>
        <ul className="listHeader_01">
          <li className="chose">
            <input type="checkbox" name="" id="" />
          </li>
          <li className="Nomber">
            <span>No.</span>
            <button type="button">
              <img src="../images/btn_sort.svg" alt="" />
            </button>
          </li>
          <li>
            <span>휴대폰</span>
            <button type="button">
              <img src="../images/btn_sort.svg" alt="" />
            </button>
          </li>
          <li>
            <span>이름</span>
            <button type="button">
              <img src="../images/btn_sort.svg" alt="" />
            </button>
          </li>
          <li>
            <span>담당자</span>
            <button type="button">
              <img src="../images/btn_sort.svg" alt="" />
            </button>
          </li>
          <li>
            <span>고객구분</span>
            <button type="button">
              <img src="../images/btn_sort.svg" alt="" />
            </button>
          </li>
          <li>
            <span>상담상태</span>
            <button type="button">
              <img src="../images/btn_sort.svg" alt="" />
            </button>
          </li>
          <li>
            <span>무료체험 시작일</span>
            <button type="button">
              <img src="../images/btn_sort.svg" alt="" />
            </button>
          </li>
          <li>
            <span>무료체험 종료일</span>
            <button type="button">
              <img src="../images/btn_sort.svg" alt="" />
            </button>
          </li>
          <li>
            <span>유료 시작일</span>
            <button type="button">
              <img src="../images/btn_sort.svg" alt="" />
            </button>
          </li>
          <li>
            <span>유료 종료일</span>
            <button type="button">
              <img src="../images/btn_sort.svg" alt="" />
            </button>
          </li>
          <li className="hold">
            <span>보기</span>
          </li>
        </ul>
        {payList.map((item) => {
          return (
            <ol className="listContent">
              <li className="chose">
                <input type="checkbox" name="" id="" />
              </li>
              <li>{item.num}</li>
              <li>{item.tell}</li>
              <li>이름</li>
              <li>담당자</li>
              <li>고객구분</li>
              <li>상담상태</li>
              <li>무료체험 시작일</li>
              <li>무료체험 종료일</li>
              <li>유료체험 시작일</li>
              <li>유료체험 종료일</li>
              <li li className="hold">
                보기
              </li>
            </ol>
          );
        })}
      </section>
    </div>
  );
}

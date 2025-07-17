import React, { useEffect, useState } from "react";

import DataInput from "../component/DataInput";
import GrayBtn from "..//component/GrayBtn";
import PointBtn from "../component/PointBtn";
import InputField from "../component/InputField";
import { tab } from "@testing-library/user-event/dist/tab";

export default function Search() {
  const customerOption = [
    { id: 1, option: "무료회원(체험중)", tab: 1 },
    { id: 2, option: "무료회원(체험완료)", tab: 2 },
  ];

  const [counsel, setCounsel] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8001/consultingStatus")
      .then((res) => res.json())
      .then((result) => setCounsel(result.data))
      .catch((err) => console.error("에러"));
  }, []);

  return (
    <>
      <details className="formWrap">
        <summary> 검색항목</summary>
        <form className="">
          <section className="inputBox">
            <InputField
              label="고객명"
              htmlFor="userName"
              name="userName"
              id="userName"
            />

            <InputField
              label="휴대폰"
              htmlFor="phone"
              name="phone"
              id="phone"
              autoComplete="tel"
            />
            <div>
              <strong>사이트</strong>
              <input type="text" name="" id="" />
            </div>
            <InputField
              label="영업담당자"
              htmlFor="manager"
              name="manager"
              id="manager"
            />
            <div>
              <strong>부서</strong>
              <input type="text" name="" id="" />
            </div>
            <div>
              <strong>출처</strong>
              <input type="text" name="" id="" />
            </div>
          </section>

          {/* 결제구분 끝 */}
          <hr />
          <section>
            <div>
              <strong htmlFor="userOption">고객구분</strong>
              <select name="userOption" id="">
                <option value="aa">선택</option>
                <option value="bb">구분</option>
              </select>
            </div>

            <div className="listCheck ">
              <strong className="plural">고객 상세구분</strong>
              <ul>
                {counsel.map((list) => {
                  return (
                    <li>
                      <input type="checkBox" name={list.name} id={list.id} />
                      <label htmlFor={list.id}>{list.name}</label>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
          <hr />
          <section>
            <div className="listCheck">
              <strong className="plural">상담상태</strong>
              <ul>
                <li>
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">분배(신규)</label>
                </li>
              </ul>
            </div>
          </section>
          <hr />
          <section className="periodData">
            <DataInput label="유료기간" shouldShow={true}></DataInput>
            <DataInput label="무료체험 기간" shouldShow={true}></DataInput>
            <DataInput label="최초 등록일"></DataInput>
          </section>
          <hr />
          <section className="searchSetting">
            <div>
              <strong htmlFor="userOption">신청 애널리스트</strong>
              <select name="userOption" id="">
                <option value="aa">선택</option>
                <option value="bb">구분</option>
              </select>
            </div>
            <div>
              <strong htmlFor="userOption">상품명</strong>
              <select name="userOption" id="">
                <option value="aa">선택</option>
                <option value="bb">구분</option>
              </select>
            </div>
            <div>
              <strong htmlFor="userOption">SMS 거부 요청</strong>
              <select name="userOption" id="">
                <option value="aa">선택</option>
                <option value="bb">구분</option>
              </select>
            </div>
          </section>
          <div className="bottomtBtn">
            <GrayBtn label="초기화"></GrayBtn>
            <PointBtn label="검색"></PointBtn>
          </div>
        </form>
      </details>
    </>
  );
}

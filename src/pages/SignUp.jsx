import React from "react";

import { Link } from "react-router-dom";

import DataInput from "../component/DataInput";
import GrayBtn from "../component/GrayBtn";
import PointBtn from "../component/PointBtn";
import PayInfo from "../component/PayInfo";
import PageName from "../component/PageName";
import TabInfo from "../component/TabInfo";
import InputField from "../component/InputField";

export default function SignUp() {
  const tabMenuArr = [
    { id: 1, name: "tab1", content: "tabCon1" },
    { id: 2, name: "tab2", content: "tabCon2" },
    { id: 3, name: "tab3", content: "tabCon3" },
  ];

  return (
    <div className="container">
      <PageName
        PageTitle="고객 등록"
        shouldShow={true}
        label_btn="대량 고객 등록"
      ></PageName>
      <form className="formWrap">
        <b>기본정보</b>
        <section className="inputBox">
          <div>
            <strong htmlFor="userOption">고객구분</strong>
            <select name="userOption" id="">
              <option value="aa">선택</option>
              <option value="bb">구분</option>
            </select>
          </div>
          <div>
            <strong htmlFor="">상담상태</strong>
            <select name="" id="">
              <option value="">선택</option>
              <option value="">1</option>
            </select>
          </div>
          <InputField
            label="영업담당자"
            htmlFor="manager"
            name="manager"
            id="manager"
          />
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
          <DataInput label="체험기간"></DataInput>
          <div className="userMemo">
            <strong htmlFor="">메모</strong>
            <textarea name="" id=""></textarea>
          </div>
        </section>
        <div className="bottomtBtn">
          <GrayBtn label="목록" />
          <PointBtn label="저장" />
        </div>
      </form>

      {/* 결제정보 */}
      <PayInfo></PayInfo>
      {/* 관련정보 */}

      <details className="formWrap">
        1<summary>관련 정보</summary>
        <ul>
          {tabMenuArr.map((tabMenuArr) => {
            return (
              <li key={tabMenuArr.id}>
                <Link />
                {tabMenuArr.name}
              </li>
            );
          })}
        </ul>
        <TabInfo></TabInfo>
      </details>
    </div>
  );
}

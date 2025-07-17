import React from "react";

export default function DataInput({ label, shouldShow }) {
  return (
    <div className="datainput">
      <strong>{label}</strong>
      {shouldShow && (
        <div className="timeData">
          <div>
            <input type="radio" name="" id="" />
            <label htmlFor="">시작일 검색</label>
          </div>
          <div>
            <input type="radio" name="" id="" />
            <label htmlFor="">종료일 검색</label>
          </div>
        </div>
      )}
      <div className="dateItem">
        <input type="date" name="" id="" />
        <input type="date" name="" id="" />
      </div>
    </div>
  );
}

import React from "react";

export default function PageName({ PageTitle, shouldShow, label_btn }) {
  return (
    <>
      <div className="h2Tit">
        <h2>{PageTitle}</h2>
        {shouldShow && <button className="btn_01">{label_btn}</button>}
      </div>
    </>
  );
}

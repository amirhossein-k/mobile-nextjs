"use client";

import React, {memo, useMemo, useState} from "react";
import {CheckBoxFilter} from "../../../../utils/FiltersUtileze";
const CheckBox = ({
  // CheckBoxFilter,
  namecheckbox,
  soldOut,
  CheckBoxFilterList,
  setSoldOut,
}: {
  // CheckBoxFilter: any;
  soldOut: boolean;
  namecheckbox: string;
  CheckBoxFilterList: string[];
  setSoldOut: any;
}) => {
  const status = namecheckbox === "موجود" ? true : false;
  const [so, setSo] = useState(true);

  const handle = (e: React.SyntheticEvent) => {
    e.defaultPrevented;
    // console.log(e.currentTarget.getAttribute("name"));
    const text = e.currentTarget.getAttribute("name");

    e.target.addEventListener("click", (e) => {
      // console.log(e);
      // console.log(text);
      text === "موجود" ? setSoldOut(true) : setSoldOut(false);
    });

    // setSoldOut(!status);
  };
  // console.log(soldOut);
  return (
    <>
      {status ? (
        <input
          className="w-5 rounded-xl border-3 "
          type="checkbox"
          onChange={(e) => handle(e)}
          name={namecheckbox}
          value={namecheckbox}
          checked={soldOut}
        />
      ) : (
        <input
          className="w-5 rounded-xl border-3 "
          type="checkbox"
          onChange={(e) => handle(e)}
          name={namecheckbox}
          value={namecheckbox}
          checked={!soldOut}
        />
      )}
      {/* <input
        className="w-5 rounded-xl border-3 "
        type="checkbox"
        onChange={(e) => handle(e)}
        name={namecheckbox}
        value={namecheckbox}
        checked={soldOut}
      /> */}

      <label className="col">{namecheckbox}</label>
    </>
  );
};

export default memo(CheckBox);

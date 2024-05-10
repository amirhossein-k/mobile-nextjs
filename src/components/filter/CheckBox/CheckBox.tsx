"use client";

import {memo, useMemo} from "react";
import {CheckBoxFilter} from "../../../../utils/FiltersUtileze";
const CheckBox = ({
  // CheckBoxFilter,
  namecheckbox,
  CheckBoxFilterList,
  setCheckBoxFilterList,
  title,
}: {
  // CheckBoxFilter: any;
  namecheckbox: string;
  CheckBoxFilterList: string[];
  setCheckBoxFilterList: any;
  title: string;
}) => {
  // console.log(CheckBoxFilterList);
  // console.log(title);
  // console.log(CheckBoxFilterList.find((item) => item === title) ? true : false);
  return (
    <>
      {CheckBoxFilterList.length === 0 ? (
        <input
          className="w-5 rounded-xl border-3 "
          type="checkbox"
          onChange={(e) =>
            CheckBoxFilter(e, CheckBoxFilterList, setCheckBoxFilterList)
          }
          name={namecheckbox}
          value={namecheckbox}
          defaultChecked={
            // true
            CheckBoxFilterList.find((item) => item === title) ? false : true
          }
        />
      ) : (
        <input
          className="w-5 rounded-xl border-3 cursor-pointer"
          type="checkbox"
          onChange={(e) =>
            CheckBoxFilter(e, CheckBoxFilterList, setCheckBoxFilterList)
          }
          name={namecheckbox}
          value={namecheckbox}
          defaultChecked={
            // true
            title === CheckBoxFilterList[0] ? true : false
          }
        />
      )}
      <label className="col">{namecheckbox}</label>
    </>
  );
};

export default memo(CheckBox);

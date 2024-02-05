"use client";

import {memo, useMemo} from "react";
import {CheckBoxFilter} from "../../../../utils/FiltersUtileze";
const CheckBox = ({
  // CheckBoxFilter,
  namecheckbox,
  CheckBoxFilterList,
  setCheckBoxFilterList,
}: {
  // CheckBoxFilter: any;
  namecheckbox: string;
  CheckBoxFilterList: string[];
  setCheckBoxFilterList: any;
}) => {
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
        />
      )}
      <label className="col">{namecheckbox}</label>
    </>
  );
};

export default memo(CheckBox);

"use client";

const CheckBox = ({
  CheckBoxFilter,
  namecheckbox,
  CheckBoxFilterList,
}: {
  CheckBoxFilter: any;
  namecheckbox: string;
  CheckBoxFilterList: string[];
}) => {
  return (
    <>
      {CheckBoxFilterList.length === 0 ? (
        <input
          className="w-5 rounded-xl border-3 "
          type="checkbox"
          onChange={(e) => CheckBoxFilter(e, 0)}
          name={namecheckbox}
          value={namecheckbox}
        />
      ) : (
        <input
          className="w-5 rounded-xl border-3 cursor-pointer"
          type="checkbox"
          onChange={(e) => CheckBoxFilter(e, 0)}
          name={namecheckbox}
          value={namecheckbox}
        />
      )}
      <label className="col">{namecheckbox}</label>
    </>
  );
};

export default CheckBox;

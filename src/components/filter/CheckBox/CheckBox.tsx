"use client";

const CheckBox = ({
  CheckBoxFilter,
  namecheckbox,
}: {
  CheckBoxFilter: any;
  namecheckbox: string;
}) => {
  return (
    <>
      <input
        className="w-5 rounded-xl border-3 cursor-pointer"
        type="checkbox"
        onChange={(e) => CheckBoxFilter(e, 0)}
        name={namecheckbox}
        value={namecheckbox}
      />
      <label className="col">{namecheckbox}</label>
    </>
  );
};

export default CheckBox;

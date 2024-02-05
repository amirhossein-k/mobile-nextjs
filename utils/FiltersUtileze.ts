export function CheckBoxFilter(
  e: React.ChangeEvent<HTMLInputElement>,
  CheckBoxFilterList: string[],
  setCheckBoxFilterList: any
) {
  const check_chekc: string[] = [
    "a14",
    "سامسونگ",
    "پسرانه",
    "دخترانه",
    "شیائومی",
    "مردانه",
  ];

  if (CheckBoxFilterList.length === 6) {
    console.log(`lenght 6 | ${CheckBoxFilterList.length}`);
    setCheckBoxFilterList([e.target.value]);
    console.log(CheckBoxFilterList);

    if (CheckBoxFilterList.length > 0) {
    } else {
      console.log("else");
      setCheckBoxFilterList(check_chekc);
    }
  } else if (e.target.checked) {
    console.log("ckeck");
    console.log(e.target.value);
    setCheckBoxFilterList((prev: any) => [...prev, e.target.value]);
  } else {
    console.log("unckech");
    console.log(e.target.value);

    const deleted = CheckBoxFilterList.filter(
      (item: any) => item !== e.target.value
    );
    setCheckBoxFilterList(deleted);
  }
}

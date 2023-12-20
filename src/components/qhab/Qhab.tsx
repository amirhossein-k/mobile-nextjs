"use client";
import React, {
  EventHandler,
  ReactElement,
  ReactEventHandler,
  ReactNode,
  useEffect,
  useState,
} from "react";
import FilterButtom from "../filter/FilterButtom";
import Image from "next/image";
import Link from "next/link";
import {product} from "../../../types";
import FilterParent from "../filter/FilterParent";
import FilterPrice from "../filter/FilterPrice";

import ItemBox from "../itembox/ItemBox";
import Select from "@mui/material/Select";
import {
  Checkbox,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  SelectChangeEvent,
} from "@mui/material";
import Geran from "../filter/Sort/Geran";
import Arzan from "../filter/Sort/Arzan";

import Jadid from "../filter/Sort/Jadid";
import Qadimi from "../filter/Sort/Qadimi";
import CheckBox from "../filter/CheckBox/CheckBox";
const Qhab = ({products}: {products: product[]}) => {
  const [filterActive, setFilterActive] = useState<boolean>(false);
  const [filter, setFilter] = useState("");
  const [status, setStatus] = useState("جدیدترین");
  const [value1, setValue1] = useState([0, 200000]);
  const [CheckBoxFilterList, setCheckBoxFilterList] = useState<string[]>([]);

  const filterhandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.innerHTML, "e");
    setFilter(e.target.innerHTML);
  };
  const handleChange = (event: SelectChangeEvent<typeof status>) => {
    const {
      target: {value},
    } = event;
    setStatus(
      // On autofill we get a stringified value.
      typeof value === "string" ? value : value
    );
  };
  const ITEM_HEIGHT = 45;
  const ITEM_PADDING_TOP = 18;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 6.5 + ITEM_PADDING_TOP,
        width: 200,
      },
    },
  };
  const names = [
    "جدیدترین",
    "پربازیدترین",
    "قدیمی ترین",
    "گران ترین",
    "ارزان ترین",
  ];

  // /////////////////////////////
  const CheckBoxFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckBoxFilterList((prev) =>
      prev.filter((item) => item !== e.target.value)
    );
    console.log(CheckBoxFilterList);
    // if (CheckBoxFilterList[0] === "") {
    //   CheckBoxFilterList.pop();
    // }

    setCheckBoxFilterList((prev) => [...prev, e.target.value]);
    console.log(CheckBoxFilterList, "pp");
    if (!e.target.checked) {
      console.log("object");
      setCheckBoxFilterList((prev) =>
        prev.filter((item) => item !== e.target.value)
      );
    }
  };

  //////////////////
  return (
    <>
      {status}
      <div className="row  bg-slate-50   text-md">ادرس زیر مجموعه</div>
      {/* <div className="row">موضوع دسته بندی</div> */}
      <div className="grid x:grid-flow-col grid-flow-row  auto-cols-fr  bg-slate-50  ">
        {/* filter - right side*/}
        <div className="col  col-span-1 px-2  ">
          {/* filter mobile */}

          <div
            className={` grid-flow-row x:grid  ${
              filterActive
                ? " fixed z-[100] bg-[#1a1b1cf5] text-sky-50 top-0 h-fit w-full right-0 p-2"
                : "hidden"
            }`}
          >
            {/* filter mobile */}
            <div className="header  flex  h-[40px] justify-between mb-3 x:hidden">
              <div className="close   flex gap-2">
                <i
                  className="bi bi-x-lg p-2 text-lg hover:scale-105 cursor-pointer"
                  onClick={(e) => setFilterActive(!filterActive)}
                ></i>
                <div className="title  p-2 text-lg">فیلترها</div>
              </div>

              <div className="remove-filter p-2 text-lg cursor-pointer">
                حذف فیلترها
              </div>
            </div>
            {/* فیلتر هزینه */}
            <div className="">
              <div className="parent-filter group">
                <FilterParent title_Filter={" فیلتر قیمت کالا "} />
                <div className="subtitle  group-hover:flex flex-col hidden ">
                  <div className="category w-full relative bg-blue-200">
                    <FilterPrice setValue1={setValue1} value1={value1} />
                  </div>
                </div>
              </div>
            </div>
            {/* فیلتر دسته بندی محصول */}
            <div className="">
              <div className="parent-filter group">
                <FilterParent title_Filter="فیلتر دسته بندی محصول " />
                <div className="subtitle group-hover:flex flex-col hidden p-2">
                  <div className="category bg-blue-200 text-black flex gap-4 p-3 text-lg">
                    <CheckBox
                      namecheckbox={"طرحدار"}
                      CheckBoxFilter={CheckBoxFilter}
                    />
                  </div>
                  <div className="category bg-blue-200 text-black flex gap-4 p-3 text-lg">
                    <CheckBox
                      namecheckbox={"دخترانه"}
                      CheckBoxFilter={CheckBoxFilter}
                    />
                  </div>
                  <div className="category bg-blue-200 text-black flex gap-4 p-3 text-lg">
                    <CheckBox
                      namecheckbox={"طرحدار"}
                      CheckBoxFilter={CheckBoxFilter}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/*فیلتر برند محصول */}
            <div className="">
              <div className="parent-filter group ">
                <FilterParent title_Filter="فیلتر برند محصول " />
                <div className="subtitle  group-hover:flex flex-col hidden p-2">
                  <div className="category bg-blue-200 text-black flex gap-4 p-3 text-lg">
                    <CheckBox
                      namecheckbox={"سامسونگ"}
                      CheckBoxFilter={CheckBoxFilter}
                    />
                  </div>
                  <div className="category bg-blue-200 text-black flex gap-4 p-3 text-lg">
                    <CheckBox
                      namecheckbox={"پسرانه"}
                      CheckBoxFilter={CheckBoxFilter}
                    />
                  </div>
                  <div className="category bg-blue-200 text-black flex gap-4 p-3 text-lg">
                    <CheckBox
                      namecheckbox={"سامسونگ"}
                      CheckBoxFilter={CheckBoxFilter}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* فیلتر وصعیت موجودی */}
            <div className="">
              <div className="parent-filter group ">
                <FilterParent title_Filter="فیلتر وصعیت موجودی " />
                <div className="subtitle  group-hover:flex flex-col hidden p-2">
                  <div className="category bg-blue-200 text-black flex gap-4 p-3 text-lg">
                    <CheckBox
                      namecheckbox={"ناموجود"}
                      CheckBoxFilter={CheckBoxFilter}
                    />
                  </div>
                  <div className="category bg-blue-200 text-black flex gap-4 p-3 text-lg">
                    <CheckBox
                      namecheckbox={"موجود"}
                      CheckBoxFilter={CheckBoxFilter}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* left side - product*/}
        <div className="col   bg-[#e3e3e3b7]  col-span-4 min-h-full h-full">
          {/* titr */}
          <div className="row grid grid-flow-col auto-cols-auto px-1 py-3 border-b">
            {/* filter */}
            <div className="flex gap-2 col-span-2 x:hidden ">
              <FilterButtom
                filterActive={filterActive}
                setFilterActive={setFilterActive}
              />
            </div>
            {/* sort filter */}
            <div className="col col-span-1  flex justify-end  ">
              <div className="p-2   w-fit flex   ">
                <i className="bi p-2 bi-sort-down group-focus/item:bg-red-400  text-xl  "></i>
                <Select
                  className="w-full  border-blue-400  border "
                  // labelId="demo-multiple-checkbox-label"
                  // id="demo-multiple-checkbox"
                  value={status}
                  onChange={handleChange}
                  input={<OutlinedInput label="Tag" />}
                  MenuProps={MenuProps}
                >
                  {names.map((name) => (
                    <MenuItem key={name} value={name}>
                      {/* <Checkbox checked={status.indexOf(name) > -1} /> */}
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
              </div>
            </div>
          </div>
          {/* product */}
          <div className="row p-1 grid   w-full my-2 2xl:grid-cols-5   lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  grid-cols-1 gap-3">
            {status === "گران ترین" ? (
              <Geran
                value1={value1}
                products={products}
                CheckBoxFilterList={CheckBoxFilterList}
              />
            ) : status === "ارزان ترین" ? (
              <Arzan value1={value1} products={products} />
            ) : status === "قدیمی ترین" ? (
              <Qadimi value1={value1} products={products} />
            ) : (
              <Jadid value1={value1} products={products} />
            )}
          </div>
        </div>
      </div>
      {CheckBoxFilterList}
    </>
  );
};

export default Qhab;

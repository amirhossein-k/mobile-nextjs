"use client";
import React, {useState} from "react";
import FilterButtom from "../filter/FilterButtom";
import Image from "next/image";
import Link from "next/link";
import {product} from "../../../types";
import FilterParent from "../filter/FilterParent";
import ItemBox from "../itembox/ItemBox";

const Qhab = ({products}: {products: product[]}) => {
  const [filter, setFilter] = useState<boolean>(false);
  return (
    <>
      <div className="row  bg-slate-50   text-md">ادرس زیر مجموعه</div>
      {/* <div className="row">موضوع دسته بندی</div> */}
      <div className="grid x:grid-flow-col grid-flow-row  auto-cols-fr  bg-slate-50  ">
        {/* filter - right side*/}
        <div className="col  col-span-1 px-2  ">
          {/* filter mobile */}

          <div
            className={` grid-flow-row x:grid  ${
              filter
                ? " fixed z-[100] bg-[#1a1b1cf5] text-sky-50 top-0 h-fit w-full right-0 p-2"
                : "hidden"
            }`}
          >
            {/* filter mobile */}
            <div className="header  flex  h-[40px] justify-between mb-3 x:hidden">
              <div className="close   flex gap-2">
                <i
                  className="bi bi-x-lg p-2 text-lg hover:scale-105 cursor-pointer"
                  onClick={(e) => setFilter(!filter)}
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
              </div>
            </div>
            {/* فیلتر دسته بندی محصول */}
            <div className="">
              <div className="parent-filter group">
                <FilterParent title_Filter="فیلتر دسته بندی محصول " />
                <div className="subtitle group-hover:flex flex-col hidden">
                  <div className="category">
                    <div className="">طرحدار</div>
                  </div>
                  <div className="category">
                    <div className="">طرحدار</div>
                  </div>
                  <div className="category">
                    <div className="">طرحدار</div>
                  </div>
                </div>
              </div>
            </div>
            {/*فیلتر برند محصول */}
            <div className="">
              <div className="parent-filter group ">
                <FilterParent title_Filter="فیلتر برند محصول " />
                <div className="subtitle  group-hover:flex flex-col hidden">
                  <div className="category">
                    <div className="">سامسونگ</div>
                  </div>
                  <div className="category">
                    <div className="">سامسونگ</div>
                  </div>
                  <div className="category">
                    <div className="">سامسونگ</div>
                  </div>
                </div>
              </div>
            </div>
            {/* فیلتر وصعیت موجودی */}
            <div className="">
              <div className="parent-filter group">
                <FilterParent title_Filter=" فیلتر وصعیت موجودی " />
              </div>
              <div className="subtitle  group-hover:flex flex-col hidden">
                <div className="category">
                  <div className="">سامسونگ</div>
                </div>
                <div className="category">
                  <div className="">سامسونگ</div>
                </div>
                <div className="category">
                  <div className="">سامسونگ</div>
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
              <FilterButtom filter={filter} setFilter={setFilter} />
            </div>
            <div className="col col-span-1 flex justify-end ">
              <div className="p-2  border-2 shadow-slate-500 shadow-shadow-one hover:scale-105 hover:shadow-shadow-white hover:shadow-slate-300 cursor-pointer">
                <i className="bi bi-sort-down  text-xl"></i>
                <span className="p-3 text-lg">مرتب سازی</span>
              </div>
            </div>
          </div>
          {/* product */}
          <div className="row p-1 grid   w-full my-2 2xl:grid-cols-5   lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  grid-cols-1 gap-3">
            {products.map((item) => {
              return <ItemBox item={item} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Qhab;

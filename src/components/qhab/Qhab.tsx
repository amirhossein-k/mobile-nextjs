"use client";
import React, {useState} from "react";
import FilterButtom from "../filter/FilterButtom";
import Image from "next/image";
import Link from "next/link";
import {product} from "../../../types";

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
          {/* <div className="filter-mobile  w-1/4 p-1">
            <i className="bi bi-sliders text-xl "></i>
          </div> */}

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
                <div className="text-lg font-semibold flex justify-between ">
                  <div className="title"> فیلتر قیمت کالا </div>
                  <div className="icon text-xl ">
                    <i className="bi bi-caret-down group-hover:text-blue-300 hidden group-hover:block group-hover:animate-bounce group-hover:duration-700"></i>
                    <i className="bi bi-caret-up group-hover:hidden "></i>
                  </div>
                </div>{" "}
              </div>
            </div>
            {/* فیلتر دسته بندی محصول */}
            <div className="">
              <div className="parent-filter group">
                <div className="text-lg font-semibold flex justify-between ">
                  <div className="title">فیلتر دسته بندی محصول </div>
                  <div className="icon text-xl ">
                    <i className="bi bi-caret-down group-hover:text-blue-300 hidden group-hover:block group-hover:animate-bounce group-hover:duration-700"></i>
                    <i className="bi bi-caret-up group-hover:hidden "></i>
                  </div>
                </div>
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
                <div className=" text-lg font-semibold flex justify-between">
                  <div className="title"> فیلتر برند محصول</div>
                  <div className="icon text-xl ">
                    <i className="bi bi-caret-down group-hover:text-blue-300 hidden group-hover:block group-hover:animate-bounce group-hover:duration-700"></i>
                    <i className="bi bi-caret-up group-hover:hidden "></i>
                  </div>
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
            {/* فیلتر وصعیت موجودی */}
            <div className="">
              <div className="parent-filter group">
                <div className="text-lg font-semibold flex justify-between ">
                  <div className="title"> فیلتر وصعیت موجودی </div>
                  <div className="icon text-xl ">
                    <i className="bi bi-caret-down group-hover:text-blue-300 hidden group-hover:block group-hover:animate-bounce group-hover:duration-700"></i>
                    <i className="bi bi-caret-up group-hover:hidden "></i>
                  </div>
                </div>
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
          <div className="row p-1 grid   w-full my-2 2xl:grid-cols-5   lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  grid-cols-2 gap-3">
            {products.map((item) => {
              return (
                <div className="col p-1 m-1  bg-white h-full  justify-center   flex flex-col group rounded-md">
                  {/* img product */}
                  <div
                    className={`header rounded-md overflow-hidden  w-full h-[250px] border-2 relative ${item.class}`}
                  >
                    {item.class && (
                      <span
                        className={`${item.class2} absolute top-0 left-1 z-30`}
                      >
                        16%
                      </span>
                    )}
                    <Image
                      alt=""
                      fill
                      className="group-hover:scale-105"
                      style={{
                        transition: "all 0.5s ease",
                      }}
                      quality={100}
                      // className="group-hover:scale-105 object-fill"
                      src="https://uploade.storage.iran.liara.space/877f451b0473f25e77266ed7cefe90450c354035_1630311086.jpg"
                    />
                  </div>
                  <div className="body px-3 flex flex-col justify-center gap-2 w-full h-1/3 ">
                    {/* title */}
                    <div className=" text-lg line-clamp-2  text-center  mb-2   h-[54px]   ">
                      {item.title}
                    </div>
                    {/* model */}
                    <div className="model">{item.model}</div>
                    {/* price */}
                    <div
                      className={`price flex justify-center gap-2 group-hover:scale-105 `}
                    >
                      {item.price_offer ? (
                        <>
                          <span className={item.class2}>
                            {item.price_offer}
                          </span>
                          <span className="line-through	">200$</span>
                        </>
                      ) : (
                        <span className="text-ellipsis">200</span>
                      )}
                    </div>
                  </div>
                  {/* add */}
                  <div className="buttom  my-1 bg-slate-100 border  flex justify-center group">
                    <Link
                      href=""
                      className="w-[50%]  group-hover:scale-105 bg-slate-100   block px-1 py-2 text-center cursor-pointer group-hover:bg-blue-200 group-hover:duration-500 group-hover:animate-pulse group-hover:w-full"
                    >
                      ثبت سفارش
                    </Link>
                  </div>
                </div>
              );
            })}
            {/* produt 1 */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Qhab;

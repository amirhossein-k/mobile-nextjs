import React from "react";

const Qhab = () => {
  const products = [
    {title: "قاب1", model: "s21", price: "200$"},
    {title: "قاب1", model: "s21", price: "200$"},
    {title: "قاب1", model: "s21", price: "200$"},
    {title: "قاب1", model: "s21", price: "200$"},
    {title: "قاب1", model: "s21", price: "200$"},
    {title: "قاب1", model: "s21", price: "200$"},
    {title: "قاب1", model: "s21", price: "200$"},
    {title: "قاب1", model: "s21", price: "200$"},
    {title: "قاب1", model: "s21", price: "200$"},
  ];
  return (
    <div className="continer min-h-full h-fit  bg-white  " dir="rtl">
      <div className="row  bg-[#a2cee698] text-md">ادرس زیر مجموعه</div>
      {/* <div className="row">موضوع دسته بندی</div> */}
      <div className="grid grid-flow-col  auto-cols-fr bg-[#a2cee68e]   h-screen ">
        {/* filter - right side*/}
        <div className="col  col-span-1 px-2">
          <div className="grid grid-flow-row">
            {/* فیلتر هزینه */}
            <div className="">
              <div className="title">فیلتر هزینه </div>
            </div>
            {/* فیلتر دسته بندی محصول */}
            <div className="">
              <div className="title text-lg font-semibold">
                فیلتر دسته بندی محصول{" "}
              </div>
              <div className="subtitle">
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
            {/*فیلتر برند محصول */}
            <div className="">
              <div className="title text-lg font-semibold">
                فیلتر برند محصول{" "}
              </div>
              <div className="subtitle">
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
            {/* فیلتر وصعیت موجودی */}
            <div className="">
              <div className="title text-lg font-semibold">
                فیلتر وصعیت موجودی{" "}
              </div>
              <div className="subtitle"></div>
            </div>
          </div>
        </div>
        {/* left side - product*/}
        <div className="col bg-[#a2cee68e] col-span-4 min-h-full h-full">
          {/* titr */}
          <div className="row grid grid-flow-col auto-cols-auto px-1 py-3 border-b">
            <div className="col col-span-2">موضوع دسته بندی</div>
            <div className="col col-span-1 flex justify-end px-2">
              مرتب سازی
            </div>
          </div>
          {/* product */}
          <div className="row p-1 flex flex-wrap w-full ">
            {products.map((item) => {
              return (
                <div className="col p-1 bg-green-100 w-5/6 sm:w-1/2  md:w-1/3  lg:w-1/5  m-1">
                  {/* img product */}
                  <div className="header">
                    <img src="" alt="" />
                  </div>
                  <div className="body">
                    {/* title */}
                    <div className="">قاب 1</div>
                    {/* model */}
                    <div className="model">s21</div>
                    {/* price */}
                    <div className="price">200$</div>
                  </div>
                  {/* add */}
                  <div className="buttom">ثبت سفارش</div>
                </div>
              );
            })}
            {/* produt 1 */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qhab;

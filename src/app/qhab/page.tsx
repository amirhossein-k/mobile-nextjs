import Image from "next/image";
import Link from "next/link";
import React from "react";

const Qhab = () => {
  const products = [
    {title: "قاب1", model: "s21", price: "200$"},
    {title: "تراول-ماگ-میکسر-درم", model: "a31", price: "200$"},
    {
      title: "شیکر میکسر پاورولوژی با حجم 450 سی سی کیفیت اصلی",
      model: "a11",
      price: "200$",
    },
    {
      title: "قاب4",
      model: "s21",
      price: "200$",
      class: "offer",
      class2: "offer-text",
      price_offer: "100$",
    },
    {title: "قاب5", model: "s21", price: "200$"},
    {title: "قاب6", model: "s21", price: "200$"},
    {title: "قاب7", model: "s21", price: "200$"},
    {title: "قاب8", model: "s21", price: "200$"},
    {title: "قاب9", model: "s21", price: "200$"},
  ];
  return (
    <div className="continer min-h-full h-fit  bg-white   " dir="rtl">
      <div className="row  bg-slate-50   text-md">ادرس زیر مجموعه</div>
      {/* <div className="row">موضوع دسته بندی</div> */}
      <div className="grid grid-flow-col  auto-cols-fr  bg-slate-50  ">
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
        <div className="col   bg-[#e3e3e3b7]  col-span-4 min-h-full h-full">
          {/* titr */}
          <div className="row grid grid-flow-col auto-cols-auto px-1 py-3 border-b">
            <div className="col col-span-2">موضوع دسته بندی</div>
            <div className="col col-span-1 flex justify-end px-2">
              مرتب سازی
            </div>
          </div>
          {/* product */}
          <div className="row p-1 grid w-full my-2  lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2  grid-cols-2 gap-3">
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
                    <div className=" text-lg line-clamp-2 group-hover:line-clamp-none text-center   h-[54px]  ">
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
    </div>
  );
};

export default Qhab;

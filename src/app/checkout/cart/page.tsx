"use client";

import {Suspense, useEffect, useState} from "react";
import {LISTORDERNEW1} from "../../../../types";
import Image from "next/image";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../../redux/store";
import {SyncOrder} from "../../../../redux/features/added_order";
interface ResGetOrderDetail {
  message: string;
  success: boolean;
  data: LISTORDERNEW1[];
}
const page = () => {
  const [order, setOrder] = useState<LISTORDERNEW1[]>();
  const [sood, setSood] = useState<number>();
  const [totalPrice, setTotalPrice] = useState<number>();
  const [totalPriceAfter, setTotalPriceAfter] = useState<number>();
  const dispatch = useDispatch<AppDispatch>();
  const [orderUpdate, setOrderUpdate] = useState<boolean>(true);
  interface ResGetOrderDetail {
    message: string;
    success: boolean;
    data: LISTORDERNEW1[];
  }
  const getOrderDetail = async () => {
    const response = await fetch("/api/users/list");

    const data: ResGetOrderDetail = await response.json();
    console.log(data);
    var sod = 0;
    var totalbefore = 0;
    var totalafter = 0;
    data.data.forEach((product, index) => {
      sod +=
        Number(product.count) *
        (Number(product.price) - Number(product.price_offer));
      totalbefore += Number(product.count) * Number(product.price);
      totalafter += Number(product.count) * Number(product.price_offer);
    });
    setSood(sod);
    setTotalPrice(totalbefore);
    setTotalPriceAfter(totalafter);
    setOrder(data.data);
    setOrderUpdate(false);
    dispatch(SyncOrder(true));
  };
  useEffect(() => {
    if (orderUpdate) {
      getOrderDetail();
    }
    // get detail order
  }, [orderUpdate]);
  console.log(order);
  console.log(sood);
  //   console.log(sod);

  return (
    <div
      className="container max-md:max-w-[800px] max-lg:max-w-screen-lg  justify-center items-center mx-auto flex w-full"
      dir="rtl"
    >
      {/* detail */}
      <div className="main flex md:flex-row flex-col  w-full gap-1 my-3 rounded-md border-[#b7b7b7] p-2">
        {/* informantion order box - right side*/}
        <div className="parent_list md:w-[70%] w-full bg-white  p-2">
          <div className=" flex flex-col gap-2">
            <span className="text-lg">سبد خرید</span>
            <span className=" flex items-center ">{order?.length} کالا</span>
          </div>
          <Suspense fallback={<>Loading...</>}>
            {order?.map((product, inx) => {
              return (
                <div className="detail_product flex flex-col   p-2 border my-1 rounded-sm">
                  {/* box product */}
                  <div className="box_product">
                    {/* detail product */}
                    <div className="main_detail_product flex flex-row gap-2">
                      <div className="img_box border border-black relative">
                        <Image
                          quality={100}
                          width={100}
                          height={100}
                          //   fill={true}
                          src={
                            "https://uploade.storage.iran.liara.space/default.png"
                          }
                          alt=""
                        />
                      </div>
                      <div className="detail_box">
                        <div className="title flex gap-3 ">
                          <h1 className="font-bold text-lg">{product.title}</h1>
                        </div>
                        <div className="color flex gap-3 text-md">
                          <span>
                            <i className="bi bi-palette"></i>
                          </span>
                          <h1>{product.color}</h1>
                        </div>
                        <div className="model flex gap-3 text-md">
                          <span>
                            <i className="bi bi-tag"></i>
                          </span>
                          <h1>{product.model}</h1>
                        </div>
                      </div>
                    </div>
                    {/* paymnet box -order */}
                    <div className="detail_payment_product flex flex-row gap-4 items-center my-3">
                      <div className="count_box flex flex-row border px-3 py-1 gap-2 ">
                        <div className="">+</div>
                        <div className="counter">{product.count}</div>
                        <div className="">-</div>
                      </div>
                      <div className="price_box">
                        <div className="offer offer-text text-sm flex gap-2 text-ellipsis ">
                          <div className="">سود شما </div>
                          {Number(product.count) *
                            (Number(product.price) -
                              Number(product.price_offer))}
                        </div>
                        <div className="asl flex">
                          {Number(product.price) * Number(product.count)}
                          <Image
                            quality={100}
                            width={20}
                            height={30}
                            src={
                              "https://uploade.storage.iran.liara.space/dollar2.png"
                            }
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Suspense>
        </div>
        {/* payment box- left side */}
        <div className="detail_patyment flex flex-col md:w-[300px] w-full ">
          <div className="parent  border p-2 border-[#b7b7b7] bg-white my-1 rounded-md">
            <div className="box1 flex flex-row gap-3 justify-between">
              <div className="title">قیمت کالاها ({order?.length})</div>
              <div className="body flex">
                {totalPrice}{" "}
                <Image
                  quality={100}
                  width={20}
                  height={30}
                  src={"https://uploade.storage.iran.liara.space/dollar2.png"}
                  alt=""
                />
              </div>
            </div>
            <div className="box2 flex flex-row gap-3 justify-between">
              <div className="title">جمع سبد خرید</div>
              <div className="body flex">
                {totalPriceAfter}{" "}
                <Image
                  quality={100}
                  width={20}
                  height={30}
                  src={"https://uploade.storage.iran.liara.space/dollar2.png"}
                  alt=""
                />
              </div>
            </div>
            <div className="box3 flex flex-row gap-3 justify-between">
              <div className="title offer offer-text">سود شما از خرید</div>
              <div className="body flex ">
                {sood}
                <Image
                  quality={100}
                  width={20}
                  height={30}
                  src={"https://uploade.storage.iran.liara.space/dollar2.png"}
                  alt=""
                />
              </div>
            </div>
            <div className="box4 flex items-center justify-center text-lg flex-row px-3 my-2 py-2 border border-sky-400 rounded-lg bg-sky-400">
              تایید و تکمیل سفارش
            </div>
          </div>
        </div>
      </div>
      {/* other options */}
      <div className="other"></div>
    </div>
  );
};

export default page;

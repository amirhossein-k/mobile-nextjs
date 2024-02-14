"use client";

import {Suspense, useEffect, useState} from "react";
import {LISTORDERNEW1} from "../../../../types";
import Image from "next/image";
import {useDispatch} from "react-redux";
import {AppDispatch, useAppSelector} from "../../../../redux/store";
import {SyncOrder} from "../../../../redux/features/added_order";
import BoxList from "@/components/cart/BoxList";

import Loading from "./loading";
interface ResGetOrderDetail {
  message: string;
  success: boolean;
  data: LISTORDERNEW1[];
}
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

  const hasUpdateOrder = useAppSelector(
    (state) => state.syncOrder.value.syncorder
  );
  console.log(hasUpdateOrder);
  const getOrderDetail = async () => {
    const response = await fetch("/api/users/list");

    const data: ResGetOrderDetail = await response.json();
    console.log(data);
    var sod = 0;
    var totalbefore = 0;
    var totalafter = 0;
    data.data.forEach((product, index) => {
      sod += Number(product.count) * Number(product.price_offer);
      totalbefore += Number(product.count) * Number(product.price);
      if (product.price_offer !== " ") {
        totalafter +=
          Number(product.count) *
          (Number(product.price) - Number(product.price_offer));
      } else {
        totalafter += Number(product.count) * Number(product.price);
      }
    });
    console.log(totalbefore);
    setSood(sod);
    setTotalPrice(totalbefore);
    setTotalPriceAfter(totalafter);
    setOrder(data.data);
    setOrderUpdate(false);
    dispatch(SyncOrder(false));
  };
  useEffect(() => {
    if (orderUpdate || hasUpdateOrder) {
      console.log("run cart");
      getOrderDetail();
      // dispatch(SyncOrder(false));
    }
    // get detail order
  }, [orderUpdate, hasUpdateOrder]);
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
          {/* <Suspense fallback={<Loading />}> */}
          {order?.map((product, inx) => {
            return (
              <BoxList
                product={product}
                inx={inx}
                key={`${inx}-${product.id}`}
              />
            );
          })}
          {/* </Suspense> */}
        </div>
        {/* payment box- left side */}
        <div className="detail_patyment flex flex-col md:w-[300px] w-full ">
          <div className="parent  border p-2 border-[#b7b7b7] bg-white my-1 rounded-md">
            <div className="box1 flex flex-row gap-3 justify-between text-[#777]">
              <div className="title ">قیمت کالاها ({order?.length})</div>
              <div className="body flex ">
                {totalPrice ? totalPrice.toLocaleString("de-DE") : ""}
                <Image
                  quality={100}
                  width={20}
                  height={30}
                  src={
                    "https://uploade.storage.iran.liara.space/dollar_kam.png"
                  }
                  alt=""
                />
              </div>
            </div>
            <div className="box2 flex flex-row gap-3 justify-between">
              <div className="title text-lg ">جمع سبد خرید</div>
              <div className="body flex">
                {totalPriceAfter ? totalPriceAfter.toLocaleString("de-DE") : ""}
                <Image
                  quality={100}
                  width={20}
                  height={30}
                  src={"https://uploade.storage.iran.liara.space/dollar2.png"}
                  alt=""
                  className=""
                />
              </div>
            </div>
            <div className="box3 flex flex-row gap-3 justify-between">
              <div className="title offer offer-text text-lg">
                سود شما از خرید
              </div>
              <div className="body flex offer offer-text">
                {sood ? sood.toLocaleString("de-DE") : ""}
                <Image
                  quality={100}
                  width={20}
                  height={30}
                  src={
                    "https://uploade.storage.iran.liara.space/dollar_litred.png"
                  }
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

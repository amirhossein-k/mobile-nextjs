"use client";
import React from "react";
import {LISTORDERNEW1} from "../../../types";
import Image from "next/image";
import CounterCartOrder from "./CounterCartOrder";
import {useDispatch} from "react-redux";
import {AppDispatch, useAppSelector} from "../../../redux/store";
import {SyncOrder} from "../../../redux/features/added_order";
import {useRouter} from "next/navigation";
interface ResGetOrderDetail {
  message: string;
  success: boolean;
  data: LISTORDERNEW1[];
}
const BoxList = ({product, inx}: {inx: number; product: LISTORDERNEW1}) => {
  const dispatch = useDispatch<AppDispatch>();

  const router = useRouter();
  const handleClick = (e: any) => {
    e.preventDefault();
    console.log(product.id);
    router.push(`/qhab/${product.id}`);
  };
  const handleDeelete = async (e: React.SyntheticEvent) => {
    // e.preventDefault();
    const requestOptions: any = {
      method: "DELETE",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        productId: product.id,
        productModel: product.model,

        productColor: product.color,
      }),
    };
    const response = await fetch("/api/users/list/delete", requestOptions);

    const data: ResGetOrderDetail = await response.json();
    console.log(data);
    dispatch(SyncOrder(true));
  };
  console.log(product);

  return (
    <div
      className="detail_product relative flex flex-col   p-3 border my-1 rounded-sm shadow-sky-300 shadow-shadow-one"
      key={`${product.id}-${inx}`}
    >
      {/* box product */}
      <i
        className="bi bi-trash absolute left-2 text-lg text-red-500 cursor-pointer top-2"
        onClick={(e) => handleDeelete(e)}
      ></i>
      <div className="box_product">
        {/* detail product */}
        <div className="main_detail_product flex flex-row gap-2">
          <div className="img_box border border-black relative w-[122px] h-[130px]">
            <Image
              quality={100}
              // width={100}
              // height={100}
              className="object-cover"
              fill={true}
              src={
                product?.productImage?.filter(
                  (item) => item.defaultImage === true
                )[0].childImage ??
                "https://uploade.storage.iran.liara.space/my.png"
              }
              alt=""
            />
          </div>
          <div className="detail_box">
            <div
              className="title flex gap-3 cursor-pointer"
              onClick={handleClick}
            >
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
          <div
            className="count_box flex flex-row justify-center items-center border px-3 py-1 gap-2 "
            dir={"ltr"}
          >
            <CounterCartOrder id={product.id} product={product} />
            {/* <div className="">+</div>
            <div className="counter">{product.count}</div>
            <div className="">-</div> */}
          </div>
          <div className="price_box">
            <div className="offer offer-text justify-center items-center text-sm flex gap-2 text-ellipsis ">
              <div className="">سود شما </div>
              {(
                Number(product.count) * Number(product.price_offer)
              ).toLocaleString("de-DE")}
              {/* {sod.toLocaleString("de-DE")} */}
              <Image
                quality={100}
                width={20}
                height={40}
                src={
                  "https://uploade.storage.iran.liara.space/dollar_litred.png"
                }
                alt=""
                className=""
              />
            </div>
            <div className="asl flex">
              {(
                (Number(product.price) - Number(product.price_offer)) *
                Number(product.count)
              ).toLocaleString("de-DE")}
              <Image
                quality={100}
                width={20}
                height={30}
                src={"https://uploade.storage.iran.liara.space/dollar2.png"}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxList;

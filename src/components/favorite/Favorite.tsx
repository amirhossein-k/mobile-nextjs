"use client";
import Image from "next/image";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import {LISTORDERNEW1, product} from "../../../types";
import {useDispatch} from "react-redux";
import {AppDispatch, useAppSelector} from "../../../redux/store";
import {SyncFavorite} from "../../../redux/features/added_favorite";
import { Bounce, toast } from "react-toastify";

interface ResGetOrderDetail {
  message: string;
  success: boolean;
  data: LISTORDERNEW1[];
}
const Favorite = ({
  setOpen,
  setLenghtFavorite,
  productFav,
}: {
  setOpen: any;
  setLenghtFavorite: any;
  productFav: product[];
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const hasUpdateFavorite = useAppSelector(
    (state) => state.SyncFavorite.value.syncFavorite
  );

  const loadingClick = async () => {
    toast("🦄 لطفا صبر کنید", {
      position: "top-right",
      // autoClose: 7000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  }
  //   const handleClose = (e) => {};

  // useEffect(() => {
  //   console.log("r4");
  //   fetch("/api/users/favorite")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       if (data) {
  //         setProduct(data.data);
  //         console.log(data.data);
  //         setLenghtFavorite(data.data.length);
  //         dispatch(SyncFavorite(false));
  //       }
  //     });
  // }, [hasUpdateFavorite]);
  const handleDeelete = async (e: React.SyntheticEvent, product: product) => {
    console.log(product.colors);
    console.log(product);
    // e.preventDefault();
    const requestOptions: any = {
      method: "DELETE",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        productId: product.id,
        productModel: product.model,

        productColor: product.colors,
      }),
    };
    const response = await fetch("/api/users/favorite/delete", requestOptions);

    const data: ResGetOrderDetail = await response.json();
    console.log(data.data);
    dispatch(SyncFavorite(true));
  };
  return (
    <div className=" left-0 top-0 text-white h-full fixed bg-[#80aacce9] p-3 z-40">
      <div
        className="cursor-pointer hover:text-red-400 mb-3"
        onClick={() => setOpen(false)}
        dir="rtl"
      >
        <i className="bi bi-x-circle-fill text-2xl"></i>
      </div>
      {/* product item */}

      {productFav.length !== 0 ? (
        productFav.map((item: product) => {
          return (
            <div
              key={item.id + item.count}
              className="w-[250px] h-[250px] p-2 rounded-lg my-2 relative overflow-hidden flex justify-center flex-col items-center text-black  shadow-shadow- bg-[#ffffff]   hover:bg-purple-300  hover:text-black group "
            >
              {/* <div className="absolute top-0 right-0 z-50 w-full h-full bg-[#97bad4df]"> */}
              <div className="group-hover:flex flex-col hover:justify-between hidden absolute  top-0 right-0 z-50 w-full h-full  bg-[#adc6d0c6]">
                <span
                  className="flex  p-1 justify-end mx-2 cursor-pointer "
                  dir="ltr"
                  // onClick={handleFavorite}
                  onClick={(e) => handleDeelete(e, item)}
                >
                  <i className="bi bi-trash3 text-2xl  text-white   overflow-hidden w-[25px] flex justify-center items-center hover:text-red-400"></i>
                </span>
                <div className="  top-[50%] flex flex-col justify-center items-center mx-auto my-auto gap-2 text-lg font-medium">
                  <Link
                    href={`/qhab/${item.id}`}
                      onClick={loadingClick}
                    className="p-2 w-full items-center justify-center flex rounded-md bg-sky-400 text-white"
                  >
                    اطلاعات محصول
                  </Link>
                  <span className="p-2 flex rounded-md bg-[#cba6f2d0] text-white cursor-pointer">
                    اضافه کردن به سبد
                  </span>
                </div>
                {/* </div> */}
              </div>
              <div className="w-full h-[75%] bg-fuchsia-300 relative">
                <div className="absolute z-30 bg-black text-white rounded px-2 py-1 right-2 top-3 group-hover:text-purple-300">
                  -5%
                </div>
                <Image
                  src={ item.productImage.filter((item) => item.defaultImage === true)[0].childImage}
                  alt=""
                  fill
                />
              </div>
              <div className="w-full h-[25%] flex  flex-col   p-2 ">
                <div className="title flex-1 text-lg  flex justify-end">
                  {item.title}
                </div>
                <div className="price flex-1 text-lg flex justify-center">
                  {item.price} تومان
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="w-full h-full">
          <div className="title  h-full flex justify-center items-center">
            <h1 className="text-xl text-center">
              لیست مورد علاقه های شما خالی است
            </h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default Favorite;

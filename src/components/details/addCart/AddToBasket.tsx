"use client";

import {toast} from "react-toastify";
import {USER} from "../../../../types";
import {AddOrderProduct} from "../../../../actions/AddOrderList";
import axios, {AxiosRequestConfig} from "axios";
import {useState} from "react";
import {usePathname, useRouter} from "next/navigation";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../../redux/store";
import {SyncOrder} from "../../../../redux/features/added_order";
// import {useEffect, useState} from "react";
// import {useSearchParams} from "next/navigation";

interface ResGetUserDetail {
  message: string;
  success: boolean;
  data: any;
}
const AddToBasket = async ({
  children,

  title_product,
  color_product,
  counter_product,
  id,
}: {
  children: React.ReactNode;
  title_product: any;
  color_product: any;
  counter_product: any;
  id: any;
}) => {
  // const registerUSers = (a:any,b:any,c:any)=>{

  // }
  const dispatch = useDispatch<AppDispatch>();
  // console.log(counter_product);
  const router = useRouter();
  const urltarget = usePathname();
  console.log(title_product);
  const registerUSers = async (e: any) => {
    try {
      const requestOptions: any = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          productId: id,
          productTitle: title_product,
          productCount: counter_product,
          productColor: color_product,
        }),
      };
      const response = fetch("/api/users/list", requestOptions);
      // const AddedOrder = response.json();

      const r = await toast.promise(response, {
        pending: {
          render() {
            return "منتظر بمانید";
          },
        },

        success: {
          render({data}: any) {
            console.log(data);
            return "اضافه شد";
          },
        },
        error: {
          render({data}: any) {
            return data.message;
          },
        },
      });
      dispatch(SyncOrder(true));
      console.log("object");
      router.replace(urltarget);
    } catch {}
  };
  return (
    <form
      className="mx-2 bg-red-400 px-3 py-2 rounded-md text-lg"
      action={(e) => registerUSers(e)}
    >
      {children}
    </form>
  );
};

export default AddToBasket;

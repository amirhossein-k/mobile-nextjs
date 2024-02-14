"use client";

import {toast} from "react-toastify";
import {USER} from "../../../../types";
import {AddOrderProduct} from "../../../../actions/AddOrderList";
import axios, {AxiosRequestConfig} from "axios";
import {useEffect, useState} from "react";
import {usePathname, useRouter} from "next/navigation";
import {useDispatch} from "react-redux";
import {AppDispatch, useAppSelector} from "../../../../redux/store";
import {SyncOrder} from "../../../../redux/features/added_order";
// import {useEffect, useState} from "react";
// import {useSearchParams} from "next/navigation";

interface ResGetUserDetail {
  message: string;
  success: boolean;
  data: any;
}
const AddToBasket = ({
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
  const hasUpdateOrder = useAppSelector(
    (state) => state.syncOrder.value.syncorder
  );
  console.log(title_product);
  console.log(urltarget);
  const registerUSers = async (e: any) => {
    try {
      console.log(urltarget);
      if (id && title_product && counter_product && color_product) {
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

        const rr = await toast.promise(response, {
          pending: {
            render() {
              console.log("object");
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
        console.log(rr);
        dispatch(SyncOrder(true));
        console.log("object");
        console.log(urltarget);
        router.replace(urltarget);
      } else {
        console.log("eroor");
        const myPromise = new Promise((resolve, reject) => {
          setTimeout(() => {
            const data = {
              productTitle: title_product,
              productCount: counter_product,
              productColor: color_product,
            };
            // resolve(data);
            reject(data);
          }, 300);
        });
        await toast.promise(myPromise, {
          pending: {
            render() {
              console.log("object");
              return "منتظر بمانید";
            },
          },

          success: {
            render({data}: any) {
              console.log(data);

              return "";
            },
          },
          error: {
            render({data}: any) {
              console.log("object");
              return (
                <div className="text-red-500 text-lg" dir="rtl">
                  <div className="">
                    {data.productTitle === undefined ? (
                      <>
                        لطفا
                        <div className="font-bold mx-1 inline-block ">مدل</div>
                        خود را انتخاب کنید
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="">
                    {data.productCount === "0" ? (
                      <>
                        لطفا
                        <div className="font-bold mx-1 inline-block ">
                          تعداد
                        </div>
                        را انتخاب کنید
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="">
                    {!data.productColor ? (
                      <>
                        لطفا
                        <div className="font-bold mx-1 inline-block ">رنگ</div>
                        خود را انتخاب کنید
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              );
            },
          },
        });
        throw new Error("error");
      }
    } catch {}
  };
  useEffect(() => {
    if (hasUpdateOrder) {
      console.log("object");
      router.replace(urltarget);
    }
  }, [urltarget, hasUpdateOrder]);
  console.log(urltarget);
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

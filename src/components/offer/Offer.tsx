import React from "react";
import {Item} from "../../../types";
import Image from "next/image";

const Offer = ({item}: {item: Item}) => {
  return (
    <div
      className=" w-full grid  auto-rows-[300px] grid-flow-col  auto-cols-[190px]  gap-2  overflow-x-auto bg-patern1 p-3 "
      dir="rtl"
    >
      <div className="h-full w-[100%] bg-slate-200-300 rounded  flex flex-col gap-3  relative  p-2  text-white hover:text-purple-300 overflow-hidden cursor-pointer bg-gray-700">
        <div className=" relative  h-[70%] ">
          <Image
            alt=""
            src={"https://uploade.storage.iran.liara.space/box.png"}
            fill
            style={{objectFit: "fill"}}
            quality={100}
            // width={1500}
            // height={1500}
          />
        </div>
        <div className=" flex text-lg   justify-center items-center  flex-1">
          <div className="flex justify-around gap-2 p-1 ">
            <span className="">پیشنهادات شگفت انگیز</span>
            {/* <span className="rounded-lg  bg-purple-200 px-2 text-black  flex justify-center items-center">
              3%
            </span> */}
          </div>
        </div>
      </div>
      {item.item?.map((item) => {
        return (
          <div className="h-full w-[100%] bg-slate-200-300 rounded  flex flex-col gap-3  relative  p-2 hover:bg-purple-300 text-white hover:text-black overflow-hidden cursor-pointer bg-gray-700">
            <div className=" relative  h-[70%] ">
              <Image
                alt=""
                src={item.pic ?? ""}
                fill
                style={{objectFit: "fill"}}
                quality={100}
                // width={1500}
                // height={1500}
              />
            </div>
            <div className=" flex text-lg   justify-center items-center  flex-1">
              <div className="flex justify-around gap-2 p-1 ">
                <span className="">1.555 تومان</span>
                <span className="rounded-lg  bg-purple-200 px-2 text-black  flex justify-center items-center">
                  3%
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Offer;

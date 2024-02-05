import React from "react";
import {Item} from "../../../types";
import Image from "next/image";
import Link from "next/link";

const Offer = ({item}: {item: Item}) => {
  return (
    <div
      className=" w-[98%] mx-auto grid  auto-rows-[300px] lg:auto-rows-[380px] grid-flow-col  auto-cols-[190px]  gap-2  overflow-x-auto bg-patern1 p-3 "
      dir="rtl"
    >
      <div className="h-full w-[100%] bg-slate-200-300 rounded  flex flex-col gap-3  relative  p-2  text-white hover:text-purple-300 overflow-hidden cursor-default bg-[#5b95cf]">
        <div className=" relative  h-[90%] lg:h-[70%] ">
          <Image
            alt=""
            src={"https://uploade.storage.iran.liara.space/offer%20copy.png"}
            fill
            style={{objectFit: "fill"}}
            quality={100}
            className=" overflow-hidden"
            // width={1500}
            // height={1500}
          />
        </div>
        <div className=" flex text-lg cursor-default  justify-center items-center  flex-1">
          <div className="flex justify-around gap-2 p-1 ">
            <span className="text-2xl text-center font-semibold">
              پیشنهادات شگفت انگیز
            </span>
            {/* <span className="rounded-lg  bg-purple-200 px-2 text-black  flex justify-center items-center">
              3%
            </span> */}
          </div>
        </div>
      </div>
      {item.item?.map((item) => {
        return (
          <Link
            href={"/"}
            className={`h-full w-[100%] bg-slate-200-300 rounded  flex flex-col gap-3  relative  p-2 group hover:bg-purple-300 text-white hover:text-black overflow-hidden cursor-pointer bg-[#5b95cf] shadow `}
          >
            <div className=" relative  h-[60%] lg:h-[65%] rounded-md overflow-hidden">
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
            <div className=" flex text-lg  flex-col gap-2  justify-center items-center  flex-1">
              {/* header */}
              <div className="bg-sky-700 group-hover:bg-purple-400 rounded p-1 w-full text-base  truncate">
                {item.title}
              </div>
              {/* price */}
              <div className="flex justify-around gap-2 p-1 ">
                <span className="">1.555 تومان</span>
                <span className="rounded-lg  bg-purple-200 px-2 text-black  flex justify-center items-center">
                  3%
                </span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Offer;

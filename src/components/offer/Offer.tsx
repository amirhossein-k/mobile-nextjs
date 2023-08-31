import React from "react";
import {Item} from "../../../types";
import Image from "next/image";

const Offer = ({item}: {item: Item}) => {
  return (
    <div className="h-fit w-full grid  auto-rows-[200px] grid-flow-col  auto-cols-[190px]  gap-2  overflow-x-auto">
      {item.item?.map((item) => {
        return (
          <div className="h-full w-[100%] bg-slate-200-300 rounded  flex flex-col gap-3  relative  p-2 hover:bg-purple-300 cursor-pointer">
            <div className="h-[70%]  flex flex-1 ">
              <Image
                alt=""
                src={item.pic}
                // fill
                style={{position: "relative", objectFit: "fill"}}
                width={200}
                height={200}
              />
            </div>
            <div className=" flex text-lg  h-full justify-center items-center">
              <div className="flex justify-around gap-2 p-1 ">
                <span className="">1.555 تومان</span>
                <span className="rounded-lg  bg-purple-200 px-2  flex justify-center items-center">
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

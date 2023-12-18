import Image from "next/image";
import Link from "next/link";
import React from "react";
import {product} from "../../../types";

const ItemBox = ({item}: {item: product}) => {
  return (
    <div className="col p-1 m-1  bg-white h-full  justify-center   flex flex-col group rounded-md">
      {/* img product */}
      <div
        className={`header rounded-md overflow-hidden  w-full h-[250px] border-2 relative ${item.classs}`}
      >
        {item.classs !== " " && (
          <span className={`${item.class2} absolute top-0 left-1 z-30`}>
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
        <div className=" text-lg line-clamp-2  text-center  mb-2   h-[54px]   ">
          {item.title}
        </div>
        {/* model */}
        <div className="model">{item.model}</div>
        {/* price */}
        <div
          className={`price flex justify-center gap-2 group-hover:scale-105 `}
        >
          {item.price_offer !== " " ? (
            <>
              <span className={item.class2}>{item.price_offer}</span>
              <span className="line-through	">{item.price}</span>
            </>
          ) : (
            <span className="text-ellipsis">{item.price}</span>
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
};

export default ItemBox;

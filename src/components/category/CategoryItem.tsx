"use client";
import React, {useEffect, useState} from "react";

import {CategoryMain, CategoryMainItem} from "../../../types";
import GridCategoryItem from "./GridCategory";
import Image from "next/image";
import Link from "next/link";
import {Bounce, toast} from "react-toastify";
const CategoryItem = ({category}: {category: CategoryMainItem[]}) => {
  // const [categoryMain, setCategoryMain] = useState<CategoryMainItem[]>();

  const loadingClick = async () => {
    toast("🦄 لطفا صبر کنید", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };
  return (
    <div className=" ">
      <div
        className={`grid lg:grid-cols-6 md:grid-cols-6 lg:grid-flow-row md:auto-cols-fr    auto-rows-[150px] sm:grid-cols-1 gap-6  bg-[#f3f3f3]    `}
      >
        {category?.map((item, index) => (
          <GridCategoryItem key={index + item.title} size={"1x1"}>
            <Link
              href={item.linkk ?? ""}
              className="overflow-hidden  relative rounded bg-green-200 h-full flex items-center justify-center"
              onClick={loadingClick}
            >
              <Image
                src={item.pic}
                alt=""
                className=" object-fill w-full hover:scale-150 "
                style={{
                  transition: "all 0.5s ease",
                  height: "inherit",
                  // width: "100%",

                  // cover, contain, none
                }}
                priority
                quality={100}
                width={200}
                height={200}
              />
              <span className="text-[#f9f9f9] textShadow2  sm:text-xl text-2xl absolute bottom-0 right-0 drop-shadow-category">
                {item.title}
              </span>
            </Link>
          </GridCategoryItem>
        ))}
      </div>
    </div>
  );
};

export default CategoryItem;

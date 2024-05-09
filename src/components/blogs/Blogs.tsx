"use client";
import React from "react";
import {Item} from "../../../types";
import {Swiper, SwiperSlide} from "swiper/react";
import {Keyboard, Scrollbar, Navigation, Pagination} from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

const Blogs = ({item}: {item: Item}) => {
  const button = document.querySelector("#box");

  return (
    <div
      className="grid  w-full grid-cols-2 cursor-pointer  md:auto-rows-[220px]  auto-rows-[150px]  md:grid-cols-2 lg:grid-cols-4 gap-2"
      dir="rtl"
    >
      {item.item?.map((pics, index) => {
        return (
          <Link
            href={`/qhab/?title=پسرانه`}
            className="bg-blue-300 group  shadow shadow-sky-300 rounded w-full flex justify-center items-center relative h-full overflow-hidden "
            key={index + pics.title}
          >
            <Image
              src={pics.pic ?? ""}
              // width={500}
              // height={500}
              fill
              quality={100}
              alt=""
              className="group-hover:scale-105 "
            />
            <span className="absolute text-xl text-[#fafafa] textShadow2 font-semibold">
              {pics.title}
            </span>
            <span id="box"></span>
          </Link>
        );
      })}
    </div>
  );
};

export default Blogs;

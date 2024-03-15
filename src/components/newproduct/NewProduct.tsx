"use client";
import React from "react";
import {Item} from "../../../types";
import {Swiper, SwiperSlide} from "swiper/react";
import {Keyboard, Scrollbar, Navigation, Pagination} from "swiper/modules";
import Image from "next/image";

const NewProduct = ({item}: {item: Item}) => {
  return (
    <div
      className="flex flex-col sm:w-[95%] md:w-[95%] lg:w-[95%] m-auto h-[480px]  p-1 py-2 shadow-shadow-one "
      dir="rtl"
    >
      <div className="header p-2 flex justify-between">
        <div className=" flex-1 flex justify-center p-2 text-xl font-semibold ">
          جدیدترین
        </div>
        <div className=" border-b-black border-b-4 border-dotted inline-block  tex-xl  w-[70%] "></div>
        <div className="flex-1 flex justify-center  text-xl p-2 cursor-pointer">
          مشاهده همه
        </div>
      </div>
      <Swiper
        slidesPerView={2}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          1180: {
            slidesPerView: 4,
            slidesPerGroup: 2,
          },
          1550: {
            slidesPerView: 5,
            slidesPerGroup: 2,
          },
        }}
        scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper "
      >
        {item.item?.map((itt, index) => {
          return (
            <SwiperSlide
              className="px-5 shadow"
              key={itt.title + index + itt.pic}
            >
              <div className="w-full flex justify-center flex-col items-center h-full shadow-shadow-catmain bg-[#2682c4]   hover:bg-purple-300 text-white hover:text-black group ">
                <div className="w-full h-[75%] bg-fuchsia-300 relative">
                  <div className="absolute z-30 bg-black rounded px-2 py-1 right-2 top-3 group-hover:text-purple-300">
                    -5%
                  </div>
                  <Image src={itt.pic ?? ""} alt="" fill />
                </div>
                <div className="w-full h-[25%] flex  flex-col  p-2">
                  <div className="title flex-1 text-lg">{itt.title}</div>
                  <div className="price flex-1 text-lg" dir="ltr">
                    155 تومان
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
    // </div>
  );
};

export default NewProduct;

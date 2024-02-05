"use client";
import React from "react";
import {Item} from "../../../types";
import {Swiper, SwiperSlide} from "swiper/react";
import {Keyboard, Scrollbar, Navigation, Pagination} from "swiper/modules";
import Image from "next/image";

const NewProduct = ({item}: {item: Item}) => {
  return (
    <div
      className="flex flex-col sm:w-[95%] md:w-[95%] lg:w-[92%] m-auto h-[480px] bg-[#d4d3d342] p-1 shadow-card2 rounded "
      dir="rtl"
    >
      <div className="header p-2 flex justify-between">
        <div className=" flex-1 indent-4 flex-col  flex justify-center p-2 text-xl font-semibold ">
          <div className="text-center">قاب های</div>
          <div className="text-center"> ایفون</div>
        </div>
        <div className=" border-b-black border-b-4 border-dotted inline-block  tex-xl  w-[70%] "></div>
        <div className="flex-1 text-center hover:font-semibold hover:textShadow flex justify-center  text-xl p-2 cursor-pointer 	">
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
            slidesPerView: 3,
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
              className="px-2   py-2 shadow "
              style={{height: "98%"}}
              key={itt.title + index + itt.pic}
            >
              <div className="bg-[#1e6fb1]  flex flex-col items-center group rounded-xl h-full overflow-hidden relative stylecard ">
                <div className="w-[95%] h-[250px] rounded overflow-hidden  mt-2 shadow-card z-40 transition-shadow relative">
                  <Image
                    src={itt.pic ?? ""}
                    alt="power"
                    fill
                    className="group-hover:scale-105"
                  />
                </div>
                <div className="w-[95%] flex flex-col  justify-center items-center z-10">
                  <h2 className="text-[#000508] font-semibold text-lg">
                    Power
                  </h2>
                  <p className="text-[#ffffffdb]">2 $</p>
                </div>
                <div className="absolute  w-full h-full bottom-0  left-0 top-0  z-0 transition-all duration-500">
                  <span className="group-hover:blur blur-0 w-full group-hover:bg-[#ffffff2b]  h-full absolute z-0"></span>
                  <button className="absolute md:-bottom-8 -bottom-8 group-hover:bottom-3  z-40   right-5 mx-0 bg-[#ffffff1f] border-none w-[80%] py-1 px-0 text-white transition-all duration-500 hover:bg-[#ffffff2b] rounded hover:bg-sky-400">
                    Add To Cart
                  </button>
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

"use client";
import React from "react";
import {Item} from "../../../types";
import {Swiper, SwiperSlide} from "swiper/react";
import {Keyboard, Scrollbar, Navigation, Pagination} from "swiper/modules";
import Image from "next/image";

const Blogs = ({item}: {item: Item}) => {
  return (
    <div
      className="flex flex-col sm:w-[95%] md:w-[95%] lg:w-[92%] m-auto h-[480px] bg-[#d4d3d342] p-1 shadow-card2 rounded "
      dir="rtl"
    >
      <div className="header p-2 flex justify-center items-center ">
        <div className=" flex-1 indent-4 flex-col  text-center flex justify-center p-2 text-xl font-semibold ">
          اموزش و اخبار
        </div>
        {/* <div className=" border-b-black border-b-4 border-dotted inline-block  tex-xl  w-[70%] "></div> */}
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
              <div className="bg-[#1e6fb1] cursor-pointer w-full flex flex-col items-center group rounded-xl h-full overflow-hidden relative stylecard ">
                <div className="w-[95%] h-[250px] rounded overflow-hidden  mt-2 shadow-card z-40 transition-shadow relative">
                  <Image
                    src={itt.pic ?? ""}
                    alt="power"
                    fill
                    className="group-hover:scale-105"
                  />
                </div>
                <div className="w-[95%] flex flex-col  justify-center items-center z-10  h-[56%]">
                  <div className="text-[#9fcaff] font-normal text-md flex  gap-2">
                    <div className="">{itt.category}</div>
                    <div className="">{itt.time}</div>
                  </div>
                  <h2 className="text-[#fafafa] font-normal text-lg">
                    {itt.title}
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Blogs;

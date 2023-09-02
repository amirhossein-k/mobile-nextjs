"use client";
import React from "react";
import {Item} from "../../../types";
import {Swiper, SwiperSlide} from "swiper/react";
import {Keyboard, Scrollbar, Navigation, Pagination} from "swiper/modules";
import Image from "next/image";

const NewProduct = ({item}: {item: Item}) => {
  return (
    // <div className="flex flex-col bg-orange-200 w-full" dir="rtl">
    //   {/* <div className="">جدید ترین</div>
    //   <div className="flex flex-row  flex-shrink overflow-x-auto ">
    //     {item.item?.map((itt) => {
    //       return (
    //         <div
    //           className={`w-fit flex-shrink-0  h-[330px] p-2  justify-center items-center  ${itt.pic} `}
    //           key={itt.pic}
    //         >
    //           <div className="w-[287px] flex justify-center flex-col items-center h-full bg-red-200">
    //             <div className="w-full h-[70%] bg-fuchsia-300">{itt.title}</div>
    //             <div className="w-full h-1/2 bg-fuchsia-600">555</div>
    //           </div>
    //         </div>
    //       );
    //     })}
    //   </div> */}
    <div
      className="flex flex-col sm:w-[95%] md:w-[85%] lg:w-[80%] m-auto h-[350px] bg-neutral-200 p-1 shadow-shadow-one "
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
            slidesPerView: 3,
            slidesPerGroup: 2,
          },
          1550: {
            slidesPerView: 4,
            slidesPerGroup: 2,
          },
        }}
        scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
      >
        {item.item?.map((itt) => {
          return (
            <SwiperSlide className="px-5 shadow">
              <div className="w-full flex justify-center flex-col items-center h-full shadow-shadow-catmain bg-gray-700   hover:bg-purple-300 text-white hover:text-black ">
                <div className="w-full h-[70%] bg-fuchsia-300 relative">
                  <Image src={itt.pic ?? ""} alt="" fill />
                </div>
                <div className="w-full h-1/2 flex  flex-col  p-2">
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

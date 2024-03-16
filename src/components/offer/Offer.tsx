"use client";
import React from "react";
import {Item, product} from "../../../types";
import Image from "next/image";
import Link from "next/link";
import {Swiper, SwiperSlide} from "swiper/react";
import {Keyboard, Navigation, Pagination, Scrollbar} from "swiper/modules";
import {Bounce, toast} from "react-toastify";

const Offer = ({item}: {item: product[]}) => {
  const handleToast = () => {
    toast("🦄 لطفا صبر کنید", {
      position: "top-right",
      autoClose: 7000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };
  const handleFavorite = () => {
    console.log("f");
  };
  return (
    <div
      className="flex-row gap-1 flex sm:w-[95%] md:w-[95%] lg:w-[95%] m-auto h-[380px]  py-2 shadow-shadow-one    bg-patern1 p-3 "
      dir="rtl"
    >
      <div className="h-full w-[270px]  bg-slate-200-300 rounded  flex flex-col gap-3 lg:col-span-1 col-span-2  relative  p-1  text-white hover:text-purple-300 overflow-hidden cursor-default bg-[#5b95cf]">
        <div className=" relative   h-[90%] lg:h-[70%] ">
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
      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={2}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          500: {
            slidesPerView: 1,
            slidesPerGroup: 5,
          },
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
        {item?.map((product, index) => {
          return (
            <SwiperSlide
              className=" shadow w-full h-full "
              key={product.title + index + product.id}
            >
              <div
                className={`h-full  w-[100%] bg-slate-200-300 rounded   group  flex flex-col gap-3  relative  p-2 group hover:bg-[#d8b4fec4] text-white hover:text-black overflow-hidden  bg-[#5b95cf] shadow `}
              >
                <div className="group-hover:flex flex-col hover:justify-between hidden absolute  top-0 right-0 z-30 w-full h-full  bg-[#adc6d0c6]">
                  <span
                    className="flex  p-1 justify-end mx-2 cursor-pointer "
                    dir="ltr"
                    onClick={handleFavorite}
                  >
                    <i className="bi bi-heart text-2xl w-full text-white md:bg-transparent mo:bg-red-600 hover:text-red-400"></i>
                  </span>
                  <div className="  top-[50%] flex flex-col justify-center items-center mx-auto my-auto gap-2 text-lg font-medium">
                    <Link
                      href={`/qhab/${product.id}`}
                      onClick={handleToast}
                      className="p-2 w-full items-center justify-center flex rounded-md bg-sky-400 text-white"
                    >
                      اطلاعات محصول
                    </Link>
                    <span className="p-2 flex rounded-md bg-[#cba6f2d0] text-white cursor-pointer">
                      اضافه کردن به سبد
                    </span>
                  </div>
                </div>
                <div className=" relative  h-[60%] lg:h-[65%] rounded-md overflow-hidden">
                  <Image
                    alt=""
                    src={
                      product?.productImage?.filter(
                        (item) => item.defaultImage === true
                      )[0].childImage
                    }
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
                    {product.title}
                  </div>
                  {/* price */}
                  <div className="flex justify-around gap-2 p-1 ">
                    <span className="">1.555 تومان</span>
                    <span className="rounded-lg  bg-purple-200 px-2 text-black  flex justify-center items-center">
                      3%
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Offer;

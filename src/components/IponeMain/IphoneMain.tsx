"use client";
import React from "react";
import {Item, product} from "../../../types";
import {Swiper, SwiperSlide} from "swiper/react";
import {Keyboard, Scrollbar, Navigation, Pagination} from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import {Bounce, toast} from "react-toastify";

const NewProduct = ({item}: {item: product[] | undefined}) => {
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
  return (
    <div
      className="flex flex-col sm:w-[95%] md:w-[95%] lg:w-[96%] m-auto h-[480px]  p-1 py-2 shadow-shadow-one "
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
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          495: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          570: {
            slidesPerView: 2,
            slidesPerGroup: 2,
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
        style={{padding: "0 20px"}}
      >
        {item?.map((itt, index) => {
          return (
            <SwiperSlide
              className="   py-2 shadow "
              style={{height: "98%"}}
              key={itt.title + index}
            >
              <div className="w-full rounded-lg relative overflow-hidden flex justify-center flex-col items-center h-full shadow-shadow-catmain bg-[#2682c4]   hover:bg-purple-300 text-white hover:text-black group">
                {/* <div className="w-[95%] h-[250px] rounded overflow-hidden  mt-2 shadow-card z-40 transition-shadow relative">
                  <Image
                    src={itt.pic ?? ""}
                    alt="power"
                    fill
                    className="group-hover:scale-105"
                  />
                </div> */}
                <div className="w-full h-[75%] bg-fuchsia-300 relative">
                  <div className="absolute z-30 bg-black rounded px-2 py-1 right-2 top-3 group-hover:text-purple-300">
                    -5%
                  </div>
                  <Image
                    alt=""
                    src={
                      itt?.productImage?.filter(
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
                <div className="w-full h-[25%] flex  flex-col  p-2">
                  <div className="title flex-1 text-lg">{itt.title}</div>
                  <div className="price flex-1 text-lg" dir="ltr">
                    155 تومان
                  </div>
                </div>
                <div className="group-hover:flex flex-col hover:justify-between hidden absolute  top-0 right-0 z-50 w-full h-full  bg-[#adc6d0c6]">
                  <span
                    className="flex  p-1 justify-end mx-2 cursor-pointer "
                    dir="ltr"
                    // onClick={handleFavorite}
                  >
                    <i className="bi bi-heart text-2xl w-full text-white   hover:text-red-400"></i>
                  </span>
                  <div className="  top-[50%] flex flex-col justify-center items-center mx-auto my-auto gap-2 text-lg font-medium">
                    <Link
                      href={`/qhab/${itt.id}`}
                      onClick={handleToast}
                      className="p-2 w-full items-center justify-center flex rounded-md bg-sky-400 text-white"
                    >
                      اطلاعات محصول
                    </Link>
                    <span className="p-2 flex rounded-md bg-[#cba6f2d0] text-white cursor-pointer">
                      اضافه کردن به سبد
                    </span>
                  </div>
                  {/* </div> */}
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

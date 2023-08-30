"use client";
import ImageGallery from "react-image-gallery";
import {Swiper, SwiperSlide} from "swiper/react";
import "react-image-gallery/styles/css/image-gallery.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Autoplay, Pagination, Navigation} from "swiper/modules";
import Image from "next/image";
import {CategoryMainItem} from "../../../types";

const slider = ({category}: {category: CategoryMainItem[]}) => {
  return (
    <div
      className={`h-full w-full grid grid-cols-1 auto-rows-[500px] md:auto-rows-[400px] `}
    >
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {category.map((item) => {
          return (
            <SwiperSlide>
              <Image src={item.pic} alt="" fill quality={100} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default slider;

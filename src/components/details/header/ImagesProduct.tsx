"use client";
import Image from "next/image";
import React, {useCallback, useRef, useState} from "react";
import styles from "@/styles/ImagesProduct.module.css";
import useWindowSize from "../../../../hooks/size";
import {ProductImage} from "../../../../types";
const ImagesProduct = ({images}: {images: ProductImage[]}) => {
  console.log(images);
  const [defaultImage, setDefaultImage] = useState<string>(
    images.filter((item) => item.defaultImage === true)[0].childImage
  );
  const [childImage, setChildImage] = useState(images);

  console.log(childImage);
  const handleChangeImage = async (e: React.SyntheticEvent) => {
    const target = e.currentTarget.getAttribute("data-Src");

    const de = defaultImage;
    if (target && de) {
      setChildImage((valuep) =>
        valuep.map((item) =>
          item.childImage === target ? {...item, imageUrl: defaultImage} : item
        )
      );
      setDefaultImage(target);
    }
  };
  const containerRef = useRef<any>();

  const ITEM_WIDTH = 130;
  const [scrollPosition, setScrollPosition] = useState(0);
  const {width, height} = useWindowSize();
  // useEffect(() => {
  //   if (width) {
  //     if (width > metr) {
  //       setOpen(false);
  //     } else {
  //       setOpen(true);
  //     }
  //   }
  // }, [width]);
  const handel = useCallback(
    (e: React.SyntheticEvent, scrollAmount: any) => {
      const top = e.currentTarget.getAttribute("data-top");
      const newScrollPosition = scrollPosition + scrollAmount;
      if (top === "1") {
        // for to up and left
        // console.log(e.currentTarget.innerHTML);
        // console.log(width);
        if (width && width > 768) {
          containerRef.current.scrollTop = -newScrollPosition;
          // console.log("desktop");
        } else {
          // console.log("mobile");
          containerRef.current.scrollLeft = -newScrollPosition;
        }
      } else {
        // fo to down and right
        if (width && width > 768) {
          containerRef.current.scrollTop = newScrollPosition;
          // console.log("desktop");
        } else {
          // console.log("mobile");
          containerRef.current.scrollLeft = newScrollPosition;
        }
      }
    },
    [width]
  );

  return (
    <div className="flex md:flex-row-reverse  flex-col w-full bg-slate-100">
      <div className=" relative right_side rounded-xl overflow-hidden bg-slate-100 md:w-[70%] h-[324px] w-full  ">
        <Image
          quality={100}
          // width={100}
          // height={100}
          className="object-contain rounded-xl overflow-hidden"
          fill={true}
          src={defaultImage}
          alt=""
        />
      </div>
      <div
        className={`left_side relative md:w-[30%] w-full  h-[150px] md:h-[324px]  scroll-smooth flex   md:flex-col flex-row md:overflow-y-scroll overflow-x-scroll ${styles.a}`}
        ref={containerRef}
      >
        <span
          className=" text-2xl font-bold md:a text-black shadow-card2 sticky  w-fit flex justify-center items-center h-fit  md:top-6 top-16 z-50 left-10 lg:left-24"
          onClick={(e) => handel(e, ITEM_WIDTH)}
          data-top="1"
        >
          {width && width < 768 ? (
            <i className="bi bi-caret-left-fill absolute"></i>
          ) : (
            <i className="bi bi-caret-up-fill absolute"></i>
          )}
        </span>

        {childImage.map((child) => {
          return (
            <div className="min-h-[120px] md:w-full w-[150px] min-w-[100px]  bg-slate-100 rounded  flex  gap-3  relative  p-2  text-white hover:text-purple-300 overflow-hidden cursor-default ">
              <div className="child_image relative rounded-xl md:w-full w-full  h-full min-h-full   bg-red-300 ">
                <Image
                  quality={100}
                  // width={100}
                  // height={100}
                  className="bg-cover border cursor-pointer overflow-hidden rounded-xl"
                  fill
                  src={child.childImage}
                  alt=""
                  data-Src={child.childImage}
                  onClick={(e) => handleChangeImage(e)}
                />
              </div>
            </div>
          );
        })}
        <span
          className="flex text-2xl font-bold text-black shadow-card2   justify-center items-cente w-fit h-fit sticky   md:bottom-0  bottom-12 top-14 z-50 md:left-10 lg:left-24 right-8"
          onClick={(e) => handel(e, ITEM_WIDTH)}
          data-top="0"
        >
          {width && width < 768 ? (
            <i className="bi bi-caret-right-fill"></i>
          ) : (
            <i className="bi bi-caret-down-fill"></i>
          )}
        </span>
      </div>
    </div>
  );
};

export default ImagesProduct;

"use client";
import Image from "next/image";
import React, {useRef, useState} from "react";
import styles from "@/styles/ImagesProduct.module.css";
import useWindowSize from "../../../../hooks/size";
const productImage = {
  id: "",
  defaultImage: "https://uploade.storage.iran.liara.space/9.jpg",
  childImage: [
    {
      id: "",
      imageUrl: "https://uploade.storage.iran.liara.space/6.jpeg",
    },
    {
      id: "",
      imageUrl: "https://uploade.storage.iran.liara.space/7.jpeg",
    },
    {
      id: "",
      imageUrl: "https://uploade.storage.iran.liara.space/1.jpeg",
    },
    {
      id: "",
      imageUrl: "https://uploade.storage.iran.liara.space/3.jpeg",
    },
    {
      id: "",
      imageUrl: "https://uploade.storage.iran.liara.space/5.jpeg",
    },
  ],
};
const ImagesProduct = () => {
  const [defaultImage, setDefaultImage] = useState<string>(
    productImage.defaultImage
  );
  const [childImage, setChildImage] = useState(productImage.childImage);

  const handleChangeImage = async (e: React.SyntheticEvent) => {
    const target = e.currentTarget.getAttribute("data-Src");

    const de = defaultImage;
    if (target && de) {
      setChildImage((valuep) =>
        valuep.map((item) =>
          item.imageUrl === target ? {...item, imageUrl: defaultImage} : item
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
  const handleScroll = (e: React.SyntheticEvent, scrollAmount: any) => {
    const top = e.currentTarget.getAttribute("data-top");
    const md = e.currentTarget.getClientRects();

    // Calculate the new scroll position
    const newScrollPosition = scrollPosition + scrollAmount;

    // Update the state with the new scroll position
    setScrollPosition(newScrollPosition);

    // Access the container element and set its scrollLeft property
    console.log(width);
    console.log(typeof width);

    if (top == "1") {
      if (width ?? 1400 > 768) {
        console.log("object");
        containerRef.current.scrollLeft = -newScrollPosition;
      } else {
        containerRef.current.scrollTop = -newScrollPosition;
      }
    } else if (top === "0") {
      console.log("");
      if (width ?? 1400 < 768) {
        console.log("object");
        containerRef.current.scrollLeft = newScrollPosition;
      } else {
        console.log("object");
        containerRef.current.scrollTop = newScrollPosition;
      }
    }
  };

  return (
    <div className="flex md:flex-row-reverse  flex-col w-full bg-slate-100">
      <div className=" relative right_side bg-slate-100 md:w-[70%] h-[324px] w-full">
        <Image
          quality={100}
          // width={100}
          // height={100}
          className="object-contain"
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
          className=" text-2xl font-bold md:a text-black shadow-card2  w-fit flex justify-center items-center h-fit sticky md:top-0 top-12 z-50 left-10 lg:left-24"
          onClick={(e) => handleScroll(e, ITEM_WIDTH)}
          data-top="1"
        >
          {width && width < 768 ? (
            <i className="bi bi-caret-left-fill"></i>
          ) : (
            <i className="bi bi-caret-up-fill"></i>
          )}
        </span>

        {childImage.map((child) => {
          return (
            <div className="min-h-[100px] md:w-full w-[150px] min-w-[100px]  bg-slate-200 rounded  flex  gap-3  relative  p-2  text-white hover:text-purple-300 overflow-hidden cursor-default ">
              <div className="child_image relative md:w-full w-full  h-full min-h-full   bg-red-300 ">
                <Image
                  quality={100}
                  // width={100}
                  // height={100}
                  className="bg-cover border"
                  fill
                  src={child.imageUrl}
                  alt=""
                  data-Src={child.imageUrl}
                  onClick={(e) => handleChangeImage(e)}
                />
              </div>
            </div>
          );
        })}
        <span
          className="flex text-2xl font-bold text-black shadow-card2   justify-center items-cente w-fit h-fit sticky   md:bottom-0  bottom-12 top-14 z-50 md:left-10 lg:left-24 right-8"
          onClick={(e) => handleScroll(e, ITEM_WIDTH)}
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

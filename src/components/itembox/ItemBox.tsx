import Image from "next/image";
import Link from "next/link";
import React from "react";
import {product} from "../../../types";
import {useRouter} from "next/navigation";
import {Bounce, toast} from "react-toastify";

const ItemBox = ({item}: {item: product}) => {
  const router = useRouter();
  const handleClick = (e: any) => {
    e.preventDefault();
    console.log(item.id);
    router.push(`/qhab/${item.id}`);
    loadingClick();
  };
  const loadingClick = async () => {
    toast("🦄 لطفا صبر کنید", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const categoey = item.category_product.filter(
    (product) => product.defaultCat === true
  );
  return (
    <div className="col  p-1 m-1  bg-white h-full  justify-center   flex flex-col group rounded-md">
      <a
        className="q cursor-pointer"
        // href={`/qhab/${item.title}`}
        // as="/qhab/my-id"
        onClick={handleClick}
      >
        {/* img product */}
        <div
          className={`header rounded-md overflow-hidden  sm:w-full  sm:h-[250px] h-[210px] border-2 relative  ${
            item.status ? item.classs : ""
          }`}
        >
          <div
            className={`${
              item.status ? "hidden" : "flex bg-blue-400"
            } z-50 relative font-bold text-lg opacity-[55%] w-full  h-full justify-center items-center  `}
          >
            ناموجود
          </div>
          {item.classs !== " " && item.status && (
            <span
              className={`${item.class2} absolute top-0 sm:left-1 right-1 z-30`}
            >
              16%
            </span>
          )}
          <Image
            alt=""
            fill
            className="group-hover:scale-105"
            style={{
              transition: "all 0.5s ease",
            }}
            quality={100}
            // className="group-hover:scale-105 object-fill"
            src={
              item.productImage.filter((item) => item.defaultImage === true)[0]
                .childImage
            }
          />
        </div>
        {/* body */}
        <div className="body px-2 py-1 flex flex-col justify-center gap-2 w-full mt-1   ">
          {/* title */}
          <div className=" text-lg line-clamp-2  text-center  mb-1 p-2  h-fit   ">
            {item.title} | {item.category_product.map((it) => ` ${it.title}`)}
          </div>
          {/* model */}
          <div className="midler-body flex justify-between">
            <div className="model p-1 w-fit flex gap-2">
              {/* {item.model} */}
              {categoey.map((item) => (
                <div key={item.id}>{item.title}</div>
              ))}
            </div>
            <div className="star-point  p-1 w-fit">
              <span className="flex  gap-2 text-sm">
                <span className="">4.2</span>
                <i className="bi bi-star-fill text-yellow-500"></i>
              </span>
            </div>
          </div>
          {/* count-storage */}
          {item.status ? (
            <div className="count-storage text-red-500 font-semibold text-sm">
              <span className="">تنها</span>
              <span className="p-1">{1}</span>
              <span className="">عدد در انبار باقی مانده</span>
            </div>
          ) : (
            <div className="text-center text-red-600">ناموجود</div>
          )}
          {/* price */}
          <div
            className={`price flex  justify-center gap-2 group-hover:scale-105 `}
          >
            {item.status ? (
              item.price_offer &&
              item.class2 !== " " &&
              typeof item.class2 === "string" ? (
                <>
                  <span className="line-through	 ">{item.price}</span>
                  <span className={`${item.class2} flex gap-1`}>
                    {item.price_offer}
                    <Image
                      quality={100}
                      width={20}
                      height={30}
                      src={
                        "https://uploade.storage.iran.liara.space/dollar2.png"
                      }
                      alt=""
                    />
                  </span>
                </>
              ) : (
                <span className="text-ellipsis flex gap-1">
                  {item.price}
                  <Image
                    quality={100}
                    width={20}
                    height={30}
                    src={"https://uploade.storage.iran.liara.space/dollar2.png"}
                    alt=""
                  />
                </span>
              )
            ) : (
              <div className=""></div>
            )}
            {/* {
            item.price_offer &&
            item.class2 !== " " &&
            typeof item.class2 === "string" ? (
              <>
                <span className="line-through	 ">{item.price}</span>
                <span className={`${item.class2} flex gap-1`}>
                  {item.price_offer}
                  <Image
                    quality={100}
                    width={20}
                    height={30}
                    src={"https://uploade.storage.iran.liara.space/dollar2.png"}
                    alt=""
                  />
                </span>
              </>
            ) : (
              <span className="text-ellipsis flex gap-1">
                {item.price}
                <Image
                  quality={100}
                  width={20}
                  height={30}
                  src={"https://uploade.storage.iran.liara.space/dollar2.png"}
                  alt=""
                />
              </span>
            )} */}
          </div>
        </div>
      </a>
      {/* order */}
      <div className="buttom  my-1 bg-slate-100 border  flex justify-center group">
        <Link
          href={`qhab/${item.id}`}
          // href="#"
          className="sm:w-[50%]  group-hover:scale-105 bg-slate-100   block px-1 py-2 text-center cursor-pointer group-hover:bg-blue-200 group-hover:duration-500 group-hover:animate-pulse group-hover:w-full"
        >
          ثبت سفارش
        </Link>
      </div>
      {/* add */}
    </div>
  );
};

export default ItemBox;

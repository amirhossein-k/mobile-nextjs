"use client";
import Link from "next/link";
import React, {useEffect, useState} from "react";

import styles from "@/styles/navbar.module.css";
import Image from "next/image";
import one from "../../public/logo.svg";
import useWindowSize from "../../hooks/size";
import {useDispatch} from "react-redux";
import {AppDispatch, useAppSelector} from "../../redux/store";
import {SyncOrder} from "../../redux/features/added_order";
import {LISTORDERNEW} from "../../types";
import Favorite from "./favorite/Favorite";
import {SyncFavorite} from "../../redux/features/added_favorite";
interface ResGetOrderDetail {
  message: string;
  success: boolean;
  data: LISTORDERNEW[];
}
const Navbarr = ({
  tokken,
}: {
  tokken: {name: string; value: string} | undefined;
}) => {
  const [open, setOpen] = useState(false);
  const [openFavorite, setOpenFavorite] = useState(false);
  const [search, setsearch] = useState(false);
  const [metr, setMetr] = useState(768);
  const [oneTime, setOneTime] = useState(true);

  const {width, height} = useWindowSize();
  const [order, setOrder] = useState<LISTORDERNEW[]>();
  const [lenghtFavorite, setLenghtFavorite] = useState();
  const dispatch = useDispatch<AppDispatch>();
  const [productFav, setProductFav] = useState([]);
  const hasUpdateOrder = useAppSelector(
    (state) => state.syncOrder.value.syncorder
  );
  const hasUpdateFavorite = useAppSelector(
    (state) => state.SyncFavorite.value.syncFavorite
  );
  // console.log(hasUpdateOrder, "update - order");

  useEffect(() => {
    if (width) {
      if (width > metr) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    }
  }, [width]);
  const getOrderDetail = async () => {
    // const update = await fetch(
    //   "/api/users/list"
    // {
    //   cache: "no-cache",
    //   next: {tags: ["update"]},
    // }
    // );
    const requestOptions: any = {
      method: "GET",
      headers: {"Content-Type": "application/json"},
    };
    const response = await fetch("/api/users/list");

    const data: ResGetOrderDetail = await response.json();
    // console.log(data);

    setOrder(data.data);
    dispatch(SyncOrder(false));
  };
  useEffect(() => {
    if (hasUpdateOrder || oneTime) {
      console.log("updated success");
      // dispatch(SyncOrder(true));
      // get detail order
      getOrderDetail();
      setOneTime(false);
    }
  }, [hasUpdateOrder]);
  useEffect(() => {
    // console.log("r4");
    if (tokken) {
      fetch("/api/users/favorite")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data) {
            setProductFav(data.data);
            console.log(data.data);
            setLenghtFavorite(data.data.length);
            dispatch(SyncFavorite(false));
          }
        });
    }
  }, [hasUpdateFavorite]);
  const handleFavorite = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setOpenFavorite(!openFavorite);
    // console.log("object");
  };

  return (
    <nav className="flex justify-between items-center min-h-[1vh]  h-full  mx-auto relative bg-[#000000]">
      {/* left nav */}
      <div className="nav-link flex justify-between items-center h-full ">
        <ul className="flex gap-6 justify-between p-1 ">
          <li className="border rounded-md bg-white  min-w-1/2 text-stone-600  hover:text-sky-500 cursor-pointer">
            <Link href="/register" className="w-full h-full block ">
              <i className="bi bi-person text-xl w-full h-full block   py-2 px-3" />
            </Link>
          </li>
          <li className="border rounded-md bg-white min-w-1/2 text-stone-600  hover:text-sky-500 cursor-pointer relative">
            <Link
              href="/checkout/cart"
              className="w-full h-full block py-2 px-3"
            >
              <i className="bi bi-cart font-semibold text-xl" />
              <span className="absolute top-0 text-sky-500 z-30 font-bold text-sm ">
                {order?.length}
              </span>
            </Link>
          </li>
          <li
            onClick={(e) => handleFavorite(e)}
            className="border rounded-md bg-white min-w-1/2 text-stone-600  hover:text-sky-500 cursor-pointer flex items-center relative"
          >
            <i className="bi bi-box2-heart text-xl  w-full h-full block   py-2 px-[12px]" />
            <span className="absolute top-0 right-0 text-sky-500 z-30 font-bold text-sm ">
              {lenghtFavorite}
            </span>
          </li>

          <li
            onClick={() => setsearch(!search)}
            className="border rounded-md bg-white min-w-1/2 text-stone-600  hover:text-sky-500 cursor-pointer flex items-center"
          >
            <i className="bi bi-search text-xl w-full h-full block   py-2 px-3" />
          </li>
        </ul>
      </div>
      {/* centrer brnad photo */}
      <div
        className="0 h-full justify-center"
        style={search ? {display: "none"} : {display: "flex"}}
      >
        <Link href={"/"} className="w-full">
          <Image
            src={one}
            alt="logo"
            width={65}
            // height={60}
            className=" cursor-pointer"
          />
        </Link>
      </div>
      <div
        className="h-full"
        style={!search ? {display: "none"} : {display: "flex"}}
        dir="rtl"
      >
        <input type="text" placeholder="جتستجو..." className="p-2 rounded-lg" />
      </div>
      {/* rigt nav */}
      <div
        style={
          open
            ? {top: "-100%", scale: "0", transitionProperty: "top"}
            : {top: "0%", scale: "1", transitionProperty: "scale"}
        }
        className="nav-link fixed bg-gray-950 duration-500 transition-all flex items-center md:min-h-fit  md:static right-0 top-[-100%] md:w-[31%] h-screen w-[50vh] md:h-full p-1  "
      >
        <ul
          dir="rtl"
          className="z-50 flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 w-full  h-full  "
        >
          <div
            className=" flex items-end justify-start p-2 md:hidden mb-5 text-white"
            onClick={() => setOpen(!open)}
          >
            <i className="bi bi-x-octagon text-2xl hover:text-red-500 "></i>
          </div>
          <li className="hover:text-sky-500 px-2 border-b pb-2  text-xl shadow-md bg-transparent text-white md:border-0 cursor-pointer sm:text-lg md:text-base lg:text-lg   w-full font-medium ">
            <Link href={"/"}>صفحه اصلی</Link>
          </li>

          <li
            className={`sm:w-full md:w-[150%] lg:w-[110%]  hover:text-sky-500   border-b pb-2 text-lg  shadow-md text-white md:border-0 cursor-pointer  sm:text-lg md:text-base lg:text-lg  font-medium`}
          >
            <div className={`${styles.dropdown} relative`}>
              <button className="   py-2 px-4 rounded  items-center">
                <span className="mr-1">دسته بندی کالاها</span>
              </button>
              <ul
                className={`${styles.dropdown_menu}  dropdown_menu md:absolute   hidden text-gray-700 pt-1 w-full`}
              >
                <li className="">
                  <a
                    className={`rounded-t bg-black text-white hover:bg-gray-200 hover:text-sky-500 py-2 px-4 block whitespace-no-wrap`}
                    href="#"
                  >
                    One
                  </a>
                </li>
                <li className="">
                  <a
                    className={` bg-black text-white hover:bg-gray-200 hover:text-sky-500 py-2 px-4 block whitespace-no-wrap`}
                    href="#"
                  >
                    One
                  </a>
                </li>
                <li className="">
                  <a
                    className={`rounded-b bg-black text-white hover:bg-gray-200 hover:text-sky-500 py-2 px-4 block whitespace-no-wrap`}
                    href="#"
                  >
                    One
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="hover:text-sky-500 px-2 border-b pb-2  text-lg  shadow-md text-white md:border-0 cursor-pointer w-full sm:text-lg md:text-base lg:text-lg font-medium">
            <Link href={"/about"}>درباره ما</Link>
          </li>
        </ul>
      </div>
      {/* rihgt nav user - grid icon */}
      <div className="flex gap-6 px-3 md:hidden">
        <i
          className="bi bi-grid text-lg cursor-pointer flex justify-center items-center text-purple-300 min-w-1/2 p-2 hover:text-sky-500 md:hidden"
          onClick={() => setOpen(!open)}
        ></i>
      </div>

      {/* favorite bar */}
      {openFavorite && (
        <Favorite
          productFav={productFav}
          setOpen={setOpenFavorite}
          setLenghtFavorite={setLenghtFavorite}
        />
      )}
    </nav>
  );
};

export default Navbarr;

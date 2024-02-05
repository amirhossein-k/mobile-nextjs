"use client";
import Link from "next/link";
import React, {useEffect, useState} from "react";

import styles from "@/styles/navbar.module.css";
import Image from "next/image";
import one from "../../public/logo.svg";
import useWindowSize from "../../hooks/size";
const Navbarr = () => {
  const [open, setOpen] = useState(false);
  const [search, setsearch] = useState(false);
  const [metr, setMetr] = useState(768);

  const {width, height} = useWindowSize();

  useEffect(() => {
    if (width) {
      if (width > metr) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    }
  }, [width]);

  return (
    <nav className="flex justify-between items-center min-h-[1vh]  h-full  mx-auto relative bg-[#000000]">
      {/* left nav */}
      <div className="nav-link flex justify-between items-center h-full ">
        <ul className="flex gap-6 justify-between p-1 ">
          <li className="border rounded-md bg-white min-w-1/2 text-stone-600 py-2 px-3 hover:text-sky-500 cursor-pointer">
            <Link href="/register">
              <i className="bi bi-person text-xl " />
            </Link>
          </li>
          <li className="border rounded-md bg-white min-w-1/2 text-stone-600 py-2 px-3 hover:text-sky-500 cursor-pointer">
            <i className="bi bi-cart font-semibold text-xl" />
          </li>

          <li
            onClick={() => setsearch(!search)}
            className="border rounded-md bg-white min-w-1/2 text-stone-600 py-2 px-3 hover:text-sky-500 cursor-pointer flex items-center"
          >
            <i className="bi bi-search text-xl " />
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
    </nav>
  );
};

export default Navbarr;

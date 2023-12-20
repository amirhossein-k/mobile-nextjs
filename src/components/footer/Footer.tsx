import Link from "next/link";
import React from "react";

import {FaFacebookF} from "react-icons/fa";
import {FiInstagram} from "react-icons/fi";
import {IoLogoTwitter} from "react-icons/io";
// import {FooterItem} from "../../../../types";

const footerItem = [
  {path: "/", title: "صفحه اصلی"},
  {path: "/about", title: "درباره ما"},
  {path: "/qhab", title: "قاب ها "},
  {path: "#essesory", title: "اکسسوری ها"},
  {path: "#lavazem-janebi", title: "لوازم جانبی"},
  // {path: "#contact", title: ""},
];
const Footer = () => {
  return (
    <footer
      className=" bg-[#0b0b0b] text-white py-3 px-0 text-center text-lg  "
      dir="rtl"
    >
      <Link
        href="#"
        className="text-3xl font-medium mb-8 cursor-pointer hover:text-white"
      >
        Marloo
      </Link>
      <ul className="flex flex-wrap justify-center gap-8 mt-5 mx-0 mb-5 ">
        {footerItem.map((item) => {
          return (
            <li className="">
              <Link
                href={item.path}
                className="hover:backdrop-blur-md hover:text-sky-200 hover:font-semibold bg-[#acacac6e] p-2 rounded-lg"
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>

      <div
        className="flex justify-center items-center flex-row gap-4 mb-2 "
        dir="ltr"
      >
        <div className="flex flex-row gap-4">
          <Link
            href="https::/facebook.com"
            className="bg-color-bg text-white p-3 rounded-xl flex border border-sky-500 hover:bg-sky-200 hover:text-sky-500 hover:border-sky-500 hover:scale-105"
          >
            <FaFacebookF />
          </Link>
          <Link
            href="https::/instagram.com"
            className="bg-color-bg text-white p-3 rounded-xl flex border border-sky-500 hover:bg-sky-200 hover:text-sky-500 hover:border-sky-500 hover:scale-105"
          >
            <FiInstagram />
          </Link>
          <Link
            href="https::/twitter.com"
            className="bg-color-bg text-white p-3 rounded-xl flex border border-sky-500 hover:bg-sky-200 hover:text-sky-500 hover:border-sky-500  "
          >
            <IoLogoTwitter />
          </Link>
        </div>
        <div className="flex flex-row-reverse gap-7">
          <span>: پشتیابنی 24 ساعته</span>
          <a
            href="tel:09391470427"
            className="hover:text-sky-200 hover:underline"
          >
            09391470427
          </a>
        </div>
      </div>
      <div className=" mt-5  text-color-bg">
        <small>&copy; Amir All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;

import Link from "next/link";
import React from "react";

import {FaFacebookF} from "react-icons/fa";
import {FiInstagram} from "react-icons/fi";
import {IoLogoTwitter} from "react-icons/io";
// import {FooterItem} from "../../../../types";

const footerItem = [
  {path: "#", title: "Home"},
  {path: "#about", title: "About"},
  {path: "#experience", title: "Experience"},
  {path: "#portfolio", title: "Portfolio"},
  {path: "#testimonials", title: "Testimonials"},
  {path: "#contact", title: "Contact"},
];
const Footer = () => {
  return (
    <footer className="bg-[#2682c4] py-12 px-0 text-center text-sm mt-28 hover:text-color-bg">
      <Link href="" className="text-3xl font-medium mb-8">
        Amir
      </Link>
      <ul className="flex flex-wrap justify-center gap-8 mt-0 mx-0 mb-12">
        {footerItem.map((item) => {
          return (
            <li className="">
              <Link href={item.path}>{item.title}</Link>
            </li>
          );
        })}
      </ul>

      <div className="flex justify-center gap-4 mb-12 ">
        <Link
          href="https::/facebook.com"
          className="bg-color-bg text-white p-3 rounded-xl flex border border-transparent hover:bg-transparent hover:text-color-bg hover:border-color-bg"
        >
          <FaFacebookF />
        </Link>
        <Link
          href="https::/instagram.com"
          className="bg-color-bg text-white p-3 rounded-xl flex border border-transparent hover:bg-transparent hover:text-color-bg hover:border-color-bg"
        >
          <FiInstagram />
        </Link>
        <Link
          href="https::/twitter.com"
          className="bg-color-bg text-white p-3 rounded-xl flex border border-transparent hover:bg-transparent hover:text-color-bg hover:border-color-bg"
        >
          <IoLogoTwitter />
        </Link>
      </div>
      <div className=" mb-16 text-color-bg">
        <small>&copy; Amir All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;

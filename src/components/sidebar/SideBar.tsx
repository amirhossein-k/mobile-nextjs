"use client";
import React, {useEffect, useState} from "react";
import styles from "@/styles/sidebar.module.css";
import Link from "next/link";
import RightSide from "./RightSide";
import LeftSide from "./LeftSide";
import {ObjectId} from "mongoose";
import {USER} from "../../../types";
import {ToastContainer} from "react-toastify";

interface InitialStateProps {
  list: boolean;
  information: boolean;
  address: boolean;
  logout: boolean;
}

export const initialState: InitialStateProps = {
  list: false,
  information: false,
  address: false,
  logout: false,
};
// interface NAVBAROPEN {
//   title: string;
//   open: boolean;
// }

const SideBar = ({user}: {user: USER}) => {
  const [navbarOpen, setNavbarOpen] = useState(initialState);

  // useEffect(() => {

  //   setNavbarOpen({...navbarOpen, ["list"]: true});
  // }, []);

  return (
    <div className={` w-full flex flex-col md:flex-row`}>
      <ToastContainer autoClose={2000} />
      <LeftSide setNavbarOpen={setNavbarOpen} navbarOpen={navbarOpen} />
      <RightSide user={user!} navbarOpen={navbarOpen} />
    </div>
  );
};

export default SideBar;

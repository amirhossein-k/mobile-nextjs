"use client";
import SideBar from "@/components/sidebar/SideBar";
import axios from "axios";
import {ObjectId} from "mongoose";
import React, {useEffect, useState} from "react";
import {USER} from "../../../types";
import {AppDispatch, useAppSelector} from "../../../redux/store";
import {SyncUser} from "../../../redux/features/updateuser-slice";
import {useDispatch} from "react-redux";
import {ToastContainer} from "react-toastify";

interface ResGetUserDetail {
  message: string;
  success: boolean;
  data: any;
}

const ProfilePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const hasUpdateUser = useAppSelector(
    (state) => state.syncUser.value.syncuser
  );
  console.log(hasUpdateUser, "update");
  const [user, setUser] = useState<USER>();
  // const [syncUser, setSyncUser] = useState(false);

  const getUserDetail = async () => {
    const update = await fetch(
      "/api/users/getuser"
      // {
      //   cache: "no-cache",
      //   next: {tags: ["update"]},
      // }
    );

    const data: ResGetUserDetail = await update.json();
    console.log(data);

    setUser(data.data);
  };
  useEffect(() => {
    console.log("user fetch");
    getUserDetail();
  }, []);

  useEffect(() => {
    if (hasUpdateUser) {
      console.log("updated success");
      dispatch(SyncUser(false));
      getUserDetail();
    }
  }, [hasUpdateUser]);
  ////////////////////////

  // //////////////////////////////

  return (
    <section className="flex justify-end h-full min-h-[90vh] w-full  ">
      <div className={` flex-row h-100 w-full flex`} dir="rtl">
        <SideBar user={user!} />
      </div>
    </section>
  );
};

export default ProfilePage;

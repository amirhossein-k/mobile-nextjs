import React from "react";
import {ITEMS} from "../../../types";

const ProfileItem = ({
  ite,
  inde,
  title,
}: {
  ite: ITEMS;
  inde: number;
  title: string;
}) => {
  return (
    <div
      className={`${
        title === "مشخصات"
          ? " p-2 m-2 flex border-b justify-around shadow-sm "
          : "flex flex-col w-full gap-1 py-2"
      }`}
      key={ite.name + inde}
    >
      {ite.name?.map((i: any, index: any) => {
        return (
          <div className=" flex flex-col " key={i}>
            <div
              className={`${
                title === "مشخصات"
                  ? "flex justify-center py-1 px-2 mb-2  font-semibold"
                  : "p-2  font-semibold"
              }  `}
            >
              {i}:
            </div>
            <div
              className={`${
                title === "مشخصات"
                  ? "flex justify-center py-1 px-2 mb-2  w-full"
                  : "p-2 border-b"
              } `}
            >
              {ite.value?.map((add: any) => {
                switch (i) {
                  case "نام":
                    return add["name"];
                  case "ایمیل":
                    return add["email"];
                  case "ادرس":
                    return add["location"];
                  case "شهر":
                    return add["state"];
                  case "کد پستی":
                    return add["zipcode"];
                  default:
                    return "";
                }
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProfileItem;

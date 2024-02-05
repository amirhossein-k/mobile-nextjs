// import axios from "axios";
import {GridItemInterface} from "../../../types";
import {EditContext} from "../sidebar/RightSide";
import React, {useContext} from "react";

import {AppDispatch} from "../../../redux/store";
import {SyncUser} from "../../../redux/features/updateuser-slice";
import {useDispatch} from "react-redux";
import {toast_alart} from "../../../redux/features/toast";
import Input from "../Input";

const Edit = ({item, title}: {item: GridItemInterface; title: string}) => {
  const [edit, setEdit] = useContext(EditContext) as any;
  const dispatch = useDispatch<AppDispatch>();
  console.log("eidt");

  const onUpdate = async (e: FormData) => {
    try {
      if (title === "مشخصات") {
        const email = e.get("ایمیل") as string;
        const name = e.get("نام") as string;

        const requestOptions: any = {
          method: "PUT",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({name, email}),
        };
        await fetch("/api/users/update", requestOptions);
      } else {
        const zipcode = e.get("کد پستی") as string;
        const state = e.get("شهر") as string;
        const location = e.get("ادرس") as string;

        const address = {
          location: location,
          state: state,
          zipcode: zipcode,
        };

        const requestOptions: any = {
          method: "PUT",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({address}),
        };
        await fetch("/api/users/update", requestOptions);
      }

      console.log("ارسال اپدیت شدن ");
      dispatch(toast_alart({title1: "اپدیت شد"}));
      dispatch(SyncUser(true));
      setEdit(false);
    } catch (err: any) {
      console.log(err, "Update Failed");
    }
  };
  return (
    <form
      key={"t"}
      action={onUpdate}
      className="flex flex-col gap-2 shadow-shadow-one h-fit items-start p-4   w-full"
    >
      <div className="flex w-full  bg-slate-100">
        {item.items?.map((ite) => {
          return (
            <div className="flex flex-col w-full gap-6" key={ite.name}>
              {ite.name?.map((i: any, index: any) => {
                return (
                  <div className="flex flex-col" key={i + index}>
                    <label htmlFor={i} className="w-1/2 ml-2 font-semibold">
                      {i} :
                    </label>

                    {ite.value?.map((add: any, indexx: any) => {
                      switch (i) {
                        case "نام":
                          return (
                            <Input
                              key={indexx + i}
                              classnamee="bg-slate-50  rounded border border-purple-200 px-3 py-2"
                              type="text"
                              name={i}
                              defaultvalue={add["name"]}
                              placeholder={i}
                            />
                          );
                        case "ایمیل":
                          return (
                            <Input
                              key={indexx + i}
                              classnamee="bg-slate-50  rounded border border-purple-200 px-3 py-2"
                              type="text"
                              name={i}
                              defaultvalue={add["email"]}
                              placeholder={i}
                            />
                          );

                        case "ادرس":
                          return (
                            <Input
                              key={indexx + i}
                              classnamee="bg-slate-50  rounded border border-purple-200 px-3 py-2"
                              type="text"
                              name={i}
                              defaultvalue={add["location"]}
                              placeholder={i}
                            />
                          );

                        case "شهر":
                          return (
                            <Input
                              key={indexx + i}
                              classnamee="bg-slate-50  rounded border border-purple-200 px-3 py-2 "
                              type="text"
                              name={i}
                              defaultvalue={add["state"]}
                              placeholder={i}
                            />
                          );

                        case "کد پستی":
                          return (
                            <Input
                              key={indexx + i}
                              classnamee="bg-slate-50  rounded border border-purple-200 px-3 py-2  "
                              type="text"
                              name={i}
                              defaultvalue={add["zipcode"]}
                              placeholder={i}
                            />
                          );

                        default:
                          return "";
                      }
                    })}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <button className="bg-black text-white rounded py-2 px-4 m-auto hover:bg-[#525252d5] ">
        اپدیت
      </button>
    </form>
  );
};

export default Edit;

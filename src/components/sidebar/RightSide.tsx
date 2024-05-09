import React, {createContext, useState} from "react";
import {GridItemInterface} from "../../../types";
import GridItem from "../Grid_item";

import {USER} from "../../../types";
import List from "../List";
import Edit from "../profile/Edit";
import ProfileItem from "../profile/ProfileItem";

export const EditContext = createContext("") as any;

const RightSide = ({user, navbarOpen}: {user: USER; navbarOpen: any}) => {
  let GridItems: GridItemInterface[] = [
    {layout: "2x1", type: "button", title: "admin" ?? ""},
    {
      layout: navbarOpen["information"] ? "5x5" : "1x1",
      type: "information",
      items: [
        {
          value: [{name: user?.name ?? "", email: user?.email ?? ""}],
          name: ["نام", "ایمیل"],
        },
      ],
    },
    {
      layout: navbarOpen["address"] ? "5x5" : "1x1",
      type: "address",
      items: [
        {
          value: user?.address,
          name: ["ادرس", "شهر", "کد پستی"],
        },
      ],
    },
    {
      layout: navbarOpen["list"] ? "8x5" : "1x1",
      type: "list",
      items: [],
    },
  ];

  const [edit, setEdit] = useState(false);
  return (
    <EditContext.Provider value={[edit, setEdit]}>
      <div className="flex-1">
        <div className=" grid grid-cols-8 auto-rows-max   xl:gap-10 xl:py-10 gap-6   xl:overflow-y-auto m-auto xl:px-4 px-3  h-full ">
          {GridItems.map((item, index) => {
            return (
              <GridItem key={index + item.layout} size={item.layout}>
                {item.type === "button" ? (
                  <button
                    className="bg-black text-white px-3  py-2 rounded hover:bg-[#525252d5] w-full"
                    onClick={() => setEdit(!edit)}
                  >
                    ویرایش
                  </button>
                ) : item.type === "information" ? (
                  <div className="flex w-full gap-1  h-full justify-center  md:justify-start ">
                    {edit ? (
                      <Edit item={item} title="مشخصات" />
                    ) : (
                      <div className="flex flex-col gap-2 shadow-shadow-one h-fit items-start p-4 w-full  ">
                        <div className=" p-2 flex justify-center rounded bg-purple-100 w-full text-lg">
                          مشخصات
                        </div>
                        <div className="flex  flex-col bg-slate-50 w-full">
                          {item.items?.map((ite, inde) => {
                            return (
                              <ProfileItem
                                inde={inde}
                                ite={ite}
                                title="مشخصات"
                                key={index + ite.name[0]}
                              />
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                ) : item.type === "address" ? (
                  <div className="flex w-full gap-1  h-full justify-center  md:justify-start">
                    {edit ? (
                      <Edit item={item} title="ادرس" />
                    ) : (
                      <div className="flex flex-col gap-2 shadow-shadow-one h-fit items-start p-4   w-full">
                        <div className=" p-2 flex justify-center rounded bg-purple-100 w-full text-lg">
                          ادرس
                        </div>
                        <div className="flex w-full flex-col bg-slate-50">
                          {item.items?.map((ite, inde) => {
                            return (
                              <ProfileItem
                                inde={inde}
                                ite={ite}
                                title="ادرس"
                                key={index + ite.name[0]}
                              />
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                ) : item.type === "list" ? (
                  <div className="flex w-full gap-1  h-full justify-center  md:justify-start">
                    {edit ? (
                      <List />
                    ) : (
                      <div className="flex flex-col gap-2 shadow-shadow-one h-fit items-start p-4 w-full  ">
                        <div className=" p-2 flex justify-center rounded bg-purple-100 w-full text-lg">
                          لیست
                        </div>
                        <div className="flex  flex-col  w-full"></div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="">not</div>
                )}
              </GridItem>
            );
          })}
        </div>
      </div>
    </EditContext.Provider>
  );
};

export default RightSide;

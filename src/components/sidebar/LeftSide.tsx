import React, {useEffect} from "react";
import {GridItemInterface} from "../../../types";
import GridItem from "../Grid_item";
import {initialState} from "./SideBar";
import axios from "axios";
import {useRouter} from "next/navigation";
import {toast} from "react-toastify";
import {AppDispatch} from "../../../redux/store";
import {useDispatch} from "react-redux";
import {SyncOrder} from "../../../redux/features/added_order";

const LeftSide = ({
  navbarOpen,
  setNavbarOpen,
}: {
  setNavbarOpen: React.ComponentState;
  navbarOpen: any;
}) => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  let Griditems: GridItemInterface[] = [
    {
      layout: "2x2",
      type: "navbar",
      title: "مشخصات" ?? "",
      name: "information",
    },
    {
      layout: "2x2",
      type: "navbar",
      title: "ادرس" ?? "",
      name: "address",
    },
    {
      layout: "2x2",
      type: "navbar",
      title: "لیست" ?? "",
      name: "list",
    },
    {
      layout: "2x2",
      type: "navbar",
      title: "خروج" ?? "",
      name: "logout",
    },
  ];

  const handleNavbar = async (e: any, title: string) => {
    if (title === "خروج") {
      try {
        const logout = axios.get("/api/users/logout");
        toast.promise(logout, {
          pending: {
            render() {
              return "منتظر بمانید";
            },
          },
          success: {
            render({data}: any) {
              dispatch(SyncOrder(true));
              setTimeout(() => {
                router.push("/register");
              }, 1500);

              // router.push("/register");
              return data.data.message;
            },
          },
          error: {
            render({data}: any) {
              return data.message;
            },
          },
        });

        // setTimeout(() => {
        //   router.push("/register");
        // }, 1500);
      } catch (error: any) {
        console.log("Logout Failed" + error.message);
      }
    } else {
      var name = await e.target.getAttribute("data-name");

      if (name) {
        setNavbarOpen(initialState);
        // setNavbarOpen({...navbarOpen, [name]: !navbarOpen[name]});
        setNavbarOpen({...initialState, [name]: true});
      }
    }
  };
  useEffect(() => {
    setNavbarOpen({...initialState, ["information"]: true});
  }, []);

  return (
    <div className="flex w-full bg-purple-100 h-fit md:w-1/5 md:h-full flex-col py-2">
      {Griditems.map((item, index) => {
        return (
          <GridItem size={item.layout} key={item.title}>
            {item.type === "navbar" ? (
              <div
                data-name={item.name}
                onClick={(e: any) => handleNavbar(e, item.title ?? "")}
                className={`shadow-shadow-one w-full py-3 flex justify-center hover:bg-slate-50 hover:text-purple-700 cursor-pointer text-lg rounded`}
              >
                {item.title ?? " "}
              </div>
            ) : (
              <div className="">No</div>
            )}
          </GridItem>
        );
      })}
    </div>
  );
};

export default LeftSide;

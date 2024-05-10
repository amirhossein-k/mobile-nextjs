"use client";

import {ChakraProvider, Spinner} from "@chakra-ui/react";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import React, {useCallback, useEffect, useState} from "react";
import {Bounce, toast} from "react-toastify";

const Description = ({children}: {children: React.ReactNode}) => {
  const [counter, setCounter] = useState<string>();
  const [open, setOpen] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const paramas = useSearchParams();
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(paramas);
      params.set(name, value);
      return params.toString();
    },
    [paramas]
  );

  const router = useRouter();
  const urltarget = usePathname();
  // console.log(urltarget.slice(6));
  // console.log(paramas.get("counter"));
  const coun = paramas.get("counter");

  const toastId = React.useRef(null);

  // console.log(open);
  useEffect(() => {
    if (loading) {
      // console.log(paramas.get("review"));
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [loading, open]);
  const handleReviw = async () => {
    setLoading(true);

    router.push(
      `/qhab/${urltarget.slice(6)}?${createQueryString("review", "true")}`
    );
    // console.log(paramas.get("review"));

    setOpen(false);
  };
  const handleDes = () => {
    setLoading(true);
    const response = async () => {
      router.push(`/qhab/${urltarget.slice(6)}`);
    };
    response();
    // const rr = toast.promise(response, {
    //   pending: {
    //     render() {
    //       console.log("object");
    //       return "منتظر بمانید";
    //     },
    //   },

    //   success: {
    //     render({data}: any) {
    //       return "لطفا صبر کنید";
    //     },
    //   },
    //   error: {
    //     render({data}: any) {
    //       return data.message;
    //     },
    //   },
    // });

    setOpen(true);

    // console.log(paramas.get("review"));
    router.back();
  };
  // console.log(paramas.get("review"));
  return (
    <ChakraProvider>
      <div className="description  p-2 mb-3 " dir="rtl">
        <div className="h-9"></div>
        {loading ? (
          <div className="flex justify-center">
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
              left={100}
            />
          </div>
        ) : (
          <>
            {/* title */}
            <div className="title flex gap-2   w-[50%] mx-auto p-1 rounded-md my-3">
              <span
                className={`p-2 bg-blue-200 flex-1 rounded-lg  text-lg text-center cursor-pointer  ${
                  open ? "border-b-4 text-blue-500  border-0" : ""
                }`}
                onClick={() => handleDes()}
              >
                توضیحات
              </span>
              <span
                className={`p-2 bg-blue-200 flex-1 rounded-lg text-center text-lg cursor-pointer ${
                  !open ? "border-b-4 text-blue-500  border-0" : ""
                }`}
                onClick={() => handleReviw()}
              >
                نظرات
              </span>
            </div>
            {/* main description */}
            <div className="main_description border border-black rounded-md p-1">
              {}
              <div className="p-1">
                {/* <ParentDes> */}
                {children}
                {/* </ParentDes> */}
              </div>
            </div>
          </>
        )}
      </div>
    </ChakraProvider>
  );
};

export default Description;

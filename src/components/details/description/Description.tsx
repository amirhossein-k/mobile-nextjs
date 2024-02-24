"use client";

import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {useCallback, useEffect, useState} from "react";

const Description = ({children}: {children: React.ReactNode}) => {
  const [counter, setCounter] = useState<string>();
  const [open, setOpen] = useState<boolean>(true);
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
  // useEffect(() => {
  //   setCounter(paramas.get("counter") ?? "0");
  // }, []);
  console.log(open);
  const handleReviw = () => {
    setOpen(false);
    router.push(
      `/qhab/${urltarget.slice(6)}?${createQueryString("review", "true")}`
    );
    // console.log(paramas.get("review"));
  };
  const handleDes = () => {
    setOpen(true);
    router.push(`/qhab/${urltarget.slice(6)}`);
    // console.log(paramas.get("review"));
    router.back();
  };
  // console.log(paramas.get("review"));
  return (
    <div className="description  p-2 mb-3" dir="rtl">
      {/* title */}
      <div className="title flex gap-2   w-[50%] mx-auto p-1 rounded-md my-3">
        <span
          className={`p-2 bg-blue-200 flex-1 rounded-lg text-center cursor-pointer  ${
            open ? "border-b-4  border-0" : ""
          }`}
          onClick={() => handleDes()}
        >
          توضیحات
        </span>
        <span
          className={`p-2 bg-blue-200 flex-1 rounded-lg text-center cursor-pointer ${
            !open ? "border-b-4  border-0" : ""
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
    </div>
  );
};

export default Description;

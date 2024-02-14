"use client";
import {useRouter, useSearchParams, usePathname} from "next/navigation";
import React, {useCallback, useEffect, useRef, useState} from "react";
import {useAppSelector} from "../../../../redux/store";

const Counter = ({
  id,
  color_product,
}: {
  [key: string]: string | string[] | undefined;
}) => {
  const [counter, setCounter] = useState(0);
  const paramas = useSearchParams();
  const router = useRouter();

  const urltarget = usePathname();
  const hasUpdateOrder = useAppSelector(
    (state) => state.syncOrder.value.syncorder
  );

  const counterRef = useRef(counter);
  const claa = useCallback(() => {
    setCounter(counter + 1);
    counterRef.current++;
  }, [counter]);

  const handleClick2 = () => {
    setCounter(counter - 1);
  };
  useEffect(() => {
    console.log("run");
    if (urltarget === `/qhab/${id}`) {
      console.log("1");
      router.push(
        `/qhab/${id}?${createQueryString("counter", String(counter))}`
      );
    } else {
      console.log("2");
      router.push(
        `/qhab/${urltarget}?${createQueryString("counter", String(counter))}`
      );
    }
    if (counter < 0) {
      setCounter(0);
    }
  }, [counter, urltarget, color_product]);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(paramas);
      params.set(name, value);
      return params.toString();
    },
    [paramas]
  );
  useEffect(() => {
    setCounter(0);
  }, [hasUpdateOrder]);

  return (
    <>
      <button onClick={() => handleClick2()} className="hover:text-red-500">
        <i className="bi bi-dash-circle-dotted text-[30px]"></i>
      </button>
      <span className=" text-lg p-1">{counter}</span>
      <button onClick={() => claa()} className="hover:text-blue-500">
        <i className="bi bi-plus-circle-dotted font-semibold text-[30px]"></i>
      </button>
    </>
  );
};

export default Counter;

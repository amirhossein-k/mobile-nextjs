"use client";
import {useRouter, useSearchParams, usePathname} from "next/navigation";
import React, {useCallback, useEffect, useRef, useState} from "react";

const Counter = ({id}: {[key: string]: string | string[] | undefined}) => {
  const [counter, setCounter] = useState(0);
  const paramas = useSearchParams();
  const router = useRouter();

  const urltarget = usePathname();

  const counterRef = useRef(counter);
  const claa = useCallback(() => {
    setCounter(counter + 1);
    counterRef.current++;
  }, [counter]);

  const handleClick2 = () => {
    setCounter(counter - 1);
  };
  useEffect(() => {
    if (urltarget === `/qhab/${id}`) {
      router.push(
        `/qhab/${id}?${createQueryString("counter", String(counter))}`
      );
    } else {
      router.push(
        `/qhab/${urltarget}?${createQueryString("counter", String(counter))}`
      );
    }
    if (counter < 0) {
      setCounter(0);
    }
  }, [counter]);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(paramas);
      params.set(name, value);
      return params.toString();
    },
    [paramas]
  );

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

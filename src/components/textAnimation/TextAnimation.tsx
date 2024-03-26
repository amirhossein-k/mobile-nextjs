"use client";
import {Item, product} from "../../../types";
import React, {useState, useCallback, useRef, useEffect} from "react";
import {useTransition, animated} from "@react-spring/web";
import styles from "@/styles/textAnimated.module.css";
const TextAnimation = ({item}: {item: product[] | undefined}) => {
  const ref = useRef<ReturnType<typeof setTimeout>[]>([]);
  const [items, set] = useState<string[]>([]);
  const transitions = useTransition(items, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: "perspective(600px) rotateX(0deg)",
      color: "#8fa5b6",
    },
    enter: [
      {opacity: 1, height: 80, innerHeight: 80},
      {transform: "perspective(600px) rotateX(180deg)", color: "#28d79f"},
      {transform: "perspective(600px) rotateX(0deg)"},
    ],
    leave: [{color: "#c23369"}, {innerHeight: 0}, {opacity: 0, height: 0}],
    update: {color: "#28b4d7"},
  });

  const reset = useCallback(() => {
    ref.current.forEach(clearTimeout);
    ref.current = [];
    set([]);
    ref.current.push(setTimeout(() => set(["مارلو", "تنوع", "کیفیت"]), 2000));
    ref.current.push(setTimeout(() => set(["مارلو", "کیفیت"]), 5000));
    ref.current.push(
      setTimeout(() => set(["مارلو", "کیفیت", "ضمانت کار ماست"]), 8000)
    );
  }, []);

  useEffect(() => {
    reset();
    setInterval(() => reset(), 10000);
    // return () => ref.current.forEach(clearTimeout);
  }, []);

  return (
    <div
      className="bg-white sm:w-[95%] md:w-[95%] lg:w-[96%] m-auto   p-1 py-2 flex items-center h-full justify-center"
      dir="rtl"
    >
      <div className="min-w-[100px] px-[20px] my-0 mx-auto h-[200px]">
        {transitions(({innerHeight, ...rest}, item) => (
          <animated.div
            style={rest}
            onClick={reset}
            className={styles.transitionsItem}
          >
            <animated.div style={{overflow: "hidden", height: innerHeight}}>
              {item}
            </animated.div>
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default TextAnimation;

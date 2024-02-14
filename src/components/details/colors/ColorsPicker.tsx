"use client";
import React, {useCallback, useEffect, useState} from "react";
import {pickColor, pickColorCSS} from "../../../../utils/ColorPicker";
import {ColorsProduct, ModelProduct} from "../../../../types";
import Model from "../model/Model";
import bcrypt from "bcryptjs";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {useAppSelector} from "../../../../redux/store";

const ColorsPicker = ({
  colors,
  model,
  children,
}: {
  colors: ColorsProduct[];
  model: ModelProduct[];
  children: React.ReactNode;
}) => {
  const [Status, setStatus] = useState(model[0].title ?? "");
  console.log(Status, "sss");
  // const model = "redmi 12s";
  const urltarget = usePathname();
  console.log(urltarget);
  const modelDefault: ModelProduct[] = [{title: "", id: "", ownerId: ""}];

  const handelCallback = useCallback(
    (e: React.SyntheticEvent) => {
      e.preventDefault();
      console.log(
        `my target color: ${e.currentTarget.getAttribute(
          "color"
        )} and title: ${Status} and id: ${model[0].ownerId}`
      );
      const hashedID = bcrypt.hashSync(model[0].ownerId, 10);
      console.log(hashedID);

      const data = {
        id: model[0].ownerId,
        title: Status,
        color: e.currentTarget.getAttribute("color"),
      };
      if (counter) {
        router.push(
          `${urltarget}?${createQueryString("id-title-color", data)}`
        );
      } else {
        router.push(
          `/qhab/${model[0].ownerId}?${createQueryString(
            "id-title-color",
            data
          )}`
        );
      }
    },
    [Status]
  );

  const paramas = useSearchParams();
  const router = useRouter();
  const counter = paramas.get("counter");
  const hasUpdateOrder = useAppSelector(
    (state) => state.syncOrder.value.syncorder
  );
  console.log(paramas.get("counter"));

  const createQueryString = useCallback(
    (name: string, value: any) => {
      const params = new URLSearchParams(paramas);

      const rr = name.split("-");

      for (let i = 0; i < rr.length; i++) {
        const target = value[rr[i]];

        params.set(rr[i], target);
      }
      return params.toString();
    },
    [paramas]
  );
  useEffect(() => {
    if (hasUpdateOrder) {
      router.replace(urltarget);
    }
  }, [counter, hasUpdateOrder]);

  // color set on cookie
  // const hanleColorSet = async (e: React.SyntheticEvent) => {
  //   e.preventDefault();
  //   console.log(
  //     `my target color: ${e.currentTarget.getAttribute(
  //       "color"
  //     )} and title: ${Status} and id: ${model[0].ownerId}`
  //   );
  //   const hashedID = await bcrypt.hash(model[0].ownerId, 10);
  //   console.log(hashedID);
  // };
  // async function CookiesColor(id, title, color) {
  //   const onDay = 24 * 60 * 60 * 1000;
  // }
  return (
    <>
      <div className="flex gap-2  p-1" dir="rtl">
        <span className="text-lg font-semibold">مدل:</span>
        <Model
          model={model ?? modelDefault}
          setStatus={setStatus}
          Status={Status}
        />
        {/* <h2 className="text-lg">{details?.model} </h2> */}
      </div>
      <div className="colors p-1 flex gap-2" dir="rtl">
        <div className="title">colors:</div>
        <div className="main flex flex-row gap-2">
          {pickColor(Status, colors).map((color, index) => {
            return (
              <div
                className={`px-3 py-2 w-[30px] h-[30px]  border rounded-md  text-lg   `}
                key={index + color}
                color={color}
                style={{
                  borderColor: pickColorCSS(color),
                  backgroundColor: pickColorCSS(color),
                }}
                // onClick={(e) => {

                //   handelCallback(e);
                // }}
                onClick={handelCallback}
              >
                {/* {color} */}
              </div>
            );
          })}
        </div>
      </div>
      {children}
    </>
  );
};

export default ColorsPicker;

"use client";
import React, {useState} from "react";
import {pickColor, pickColorCSS} from "../../../../utils/ColorPicker";
import {ColorsProduct, ModelProduct} from "../../../../types";
import Model from "../model/Model";

const ColorsPicker = ({
  colors,
  model,
}: {
  colors: ColorsProduct[];
  model: ModelProduct[];
}) => {
  const [Status, setStatus] = useState(model[0].title ?? "");
  console.log(Status, "sss");
  // const model = "redmi 12s";
  const modelDefault: ModelProduct[] = [{title: "", id: "", ownerId: ""}];

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
          {pickColor(Status, colors).map((color) => {
            return (
              <div
                className={`px-3 py-2 w-[30px] h-[30px]  border rounded-md  text-lg   `}
                style={{
                  borderColor: pickColorCSS(color),
                  backgroundColor: pickColorCSS(color),
                }}
              >
                {/* {color} */}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ColorsPicker;

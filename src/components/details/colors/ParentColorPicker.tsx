"use server";
import {useContext} from "react";
import {ColorsProduct, ModelProduct} from "../../../../types";
import {pickColor, pickColorCSS} from "../../../../utils/ColorPicker";
import Model from "../model/Model";
import bcryptjs from "bcryptjs";
import {ThemeContext} from "./ColorsPicker";

const ParentColorPicker = async ({}) => {
  const theme = useContext(ThemeContext);
  console.log(theme);
  return (
    <>
      <div className="flex gap-2  p-1" dir="rtl">
        <span className="text-lg font-semibold">مدل:</span>
        {/* <Model
          model={model ?? modelDefault}
          setStatus={setStatus}
          Status={Status}
        /> */}
        {/* <h2 className="text-lg">{details?.model} </h2> */}
      </div>
      <div className="colors p-1 flex gap-2" dir="rtl">
        <div className="title">colors:</div>
        <div className="main flex flex-row gap-2">
          {/* {pickColor(Status, colors).map((color, index) => {
            return (
              <div
                className={`px-3 py-2 w-[30px] h-[30px]  border rounded-md  text-lg   `}
                key={index}
                color={color}
                style={{
                  borderColor: pickColorCSS(color),
                  backgroundColor: pickColorCSS(color),
                }} */}
          {/* // onClick={(e) => { */}
          // hanleColorSet(e);
          {/* // }} */}
          {/* > */}
          {/* {color} */}
          {/* </div> */}
          {/* // ); */}
          {/* //   })} */}
        </div>
      </div>
    </>
  );
};

export default ParentColorPicker;

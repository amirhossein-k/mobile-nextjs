import React from "react";
import {pickColor, pickColorCSS} from "../../../../utils/ColorPicker";

const ColorsPicker = async () => {
  const model = "redmi 12s";
  const colors = [
    {model: "redmi 11s", colors: ["red"]},
    {model: "redmi 12s", colors: ["red", "blue", "pink"]},
  ];

  return (
    <div className="colors p-1 flex gap-2">
      <div className="title">colors:</div>
      <div className="main">
        {pickColor(model, colors).map((color) => {
          return (
            <div className={`px-2 py-1 border inline ${pickColorCSS(color)}`}>
              {color}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ColorsPicker;

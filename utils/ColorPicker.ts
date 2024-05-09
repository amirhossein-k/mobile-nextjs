import {ColorsProduct, ModelProduct} from "../types";

interface COLORS {
  model: string;
  colors: string[];
}

export const pickColor = (Status: any, colors: ColorsProduct[]) => {
  const rr = colors.map((item) => item.Colors.split("-"));

  const result = colors.filter((item) => item.model === Status);

  const target = colors.indexOf(result[0]);

  if (result.length !== 0) {
    return rr[target];
  } else {
    return [""];
  }
};

export const pickColorCSS = (color: string) => {
  switch (color) {
    case "ابی":
      return "blue";
    case "قرمز":
      return "red";
    case "صورتی":
      return "#f719d2";
    case "سفید":
      return "white";
    case "زرد":
      return "yellow";
    case "مشکی":
      return "black";
    case "سبز":
      return "green";
    case "قهوه ای":
      return "brown";
    default:
      return "black";
  }
};

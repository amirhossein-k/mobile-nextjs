interface COLORS {
  model: string;
  colors: string[];
}

// {model: "redmi 11s", colors: ["red"]},
export const pickColor = (model: string, colors: COLORS[]) => {
  const result = colors.filter((item) => item.model === model);
  const r3 = result.map((item) => item.colors);
  console.log(r3[0]);
  if (result) {
    return r3[0];
  } else {
    return ["white"];
  }
};

export const pickColorCSS = (color: string) => {
  switch (color) {
    case "blue":
      return "text-blue-500";
    case "red":
      return "text-red-500";
    case "pink":
      return "text-pink-500";
    default:
      return "text-green-500";
  }
};

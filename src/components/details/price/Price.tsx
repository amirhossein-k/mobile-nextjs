import React from "react";

const Price = ({price}: {price: number}) => {
  return (
    <div className="price bg-red-300">{price.toLocaleString("de-DE")}</div>
  );
};

export default Price;

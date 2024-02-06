import React from "react";

const Price = ({price}: {price: number}) => {
  return <div className="price">{price.toLocaleString("de-DE")}</div>;
};

export default Price;

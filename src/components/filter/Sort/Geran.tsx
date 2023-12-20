"use client";

import ItemBox from "@/components/itembox/ItemBox";
import {product} from "../../../../types";
import {memo} from "react";

const Geran = ({
  products,
  value1,
  CheckBoxFilterList,
}: {
  products: product[];
  value1: number[];
  CheckBoxFilterList: string[];
}) => {
  console.log("end render");
  // for(var ii =0 ; ii<products.length;ii++){
  var arrrr = ["a14", "سامسونگ", "پسرانه", "دخترانه", "شیائومی", "مردانه"];
  // }

  return (
    <>
      {products
        ?.filter(function (x) {
          return Number(x.price) >= value1[0] && Number(x.price) <= value1[1];
        })
        ?.sort((p1, p2) =>
          Number(p1.price) < Number(p2.price)
            ? 1
            : Number(p1.price) > Number(p2.price)
            ? -1
            : 0
        )
        // ?.filter((item) => item.category_product )
        ?.map((item) => {
          return <ItemBox item={item} />;
        })}
    </>
  );
};

export default Geran;

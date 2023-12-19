"use client";
import ItemBox from "@/components/itembox/ItemBox";
import {product} from "../../../../types";

const Arzan = ({products, value1}: {products: product[]; value1: number[]}) => {
  return (
    <>
      {products
        ?.filter(function (x) {
          return Number(x.price) >= value1[0] && Number(x.price) <= value1[1];
        })
        ?.sort((p1, p2) =>
          Number(p1.price) < Number(p2.price)
            ? -1
            : Number(p1.price) > Number(p2.price)
            ? 1
            : 0
        )
        ?.map((item) => {
          return <ItemBox item={item} />;
        })}
    </>
  );
};

export default Arzan;

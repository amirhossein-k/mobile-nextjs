"use client";
import ItemBox from "@/components/itembox/ItemBox";
import {product} from "../../../../types";

const Qadimi = ({
  products,
  value1,
}: {
  products: product[];
  value1: number[];
}) => {
  return (
    <>
      {products
        ?.filter(function (x) {
          return Number(x.price) >= value1[0] && Number(x.price) <= value1[1];
        })

        ?.map((item) => {
          return <ItemBox item={item} />;
        })}
    </>
  );
};

export default Qadimi;

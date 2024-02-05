"use client";

import ItemBox from "@/components/itembox/ItemBox";
import {product} from "../../../../types";

const Geran = ({
  products,
  value1,
  CheckBoxFilterList,
}: {
  products: product[];
  value1: number[];
  CheckBoxFilterList: string[];
}) => {
  const er: any = products
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
    ?.filter((item) => {
      var u: any = item;

      for (var i = 0; i < item.category_product.length; i++) {
        for (var t = 0; t <= CheckBoxFilterList.length; t++) {
          u = item.category_product[i].title.includes(CheckBoxFilterList[t]);

          if (u) {
            return u;
          }
        }
        console.log(`1 ${u}`);
        if (u) {
          return u;
        }
      }
      return u;
    });

  return (
    <>
      {er?.map((item: any) => {
        return <ItemBox item={item} />;
      })}
    </>
  );
};

export default Geran;

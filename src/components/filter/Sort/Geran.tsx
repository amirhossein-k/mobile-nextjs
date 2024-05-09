"use client";

import ItemBox from "@/components/itembox/ItemBox";
import {product} from "../../../../types";
import {Suspense, useEffect} from "react";
import { useRouter } from "next/router";

const Geran = ({
  soldOut,
  products,
  value1,
  CheckBoxFilterList,
}: {
  soldOut: boolean;
  products: product[];
  value1: number[];
  CheckBoxFilterList: string[];
}) => {
  console.log(CheckBoxFilterList, "ff");
  const er: any = products
    ?.filter(function (x) {
      return Number(x.price) >= value1[0] && Number(x.price) <= value1[1];
    })
    ?.filter(function (x) {
      return x.status === soldOut;
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
    <Suspense fallback={<>loading....</>}>
      {/* // <> */}
      {er?.map((item: any) => {
        return <ItemBox item={item} />;
      })}
      {/* </> */}
    </Suspense>
  );
};

export default Geran;

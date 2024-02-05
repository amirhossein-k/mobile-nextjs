"use client";
import ItemBox from "@/components/itembox/ItemBox";
import {product} from "../../../../types";

const Qadimi = ({
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
    ?.filter((item) => {
      var u: any = item;
      for (var i = 0; i < item.category_product.length; i++) {
        for (var t = 0; t <= CheckBoxFilterList.length; t++) {
          u = item.category_product[i].title.includes(CheckBoxFilterList[t]);

          if (u) {
            return u;
          }
        }

        if (u) {
          return u;
        }
      }
      return u;
    });
  return (
    <>
      {er?.map((item: product) => {
        return <ItemBox item={item} key={item.title} />;
      })}
    </>
  );
};

export default Qadimi;

import FilterButtom from "@/components/filter/FilterButtom";
import Qhab from "@/components/qhab/Qhab";
import Image from "next/image";
import Link from "next/link";
import React, {useState} from "react";
import {product} from "../../../types";

const QhabMain = () => {
  const products: product[] = [
    {title: "قاب1", model: "s21", price: "200$"},
    {title: "تراول-ماگ-میکسر-درم", model: "a31", price: "200$"},
    {
      title: "شیکر میکسر پاورولوژی با حجم 450 سی سی کیفیت اصلی",
      model: "a11",
      price: "200$",
    },
    {
      title: "قاب4",
      model: "s21",
      price: "200$",
      class: "offer",
      class2: "offer-text",
      price_offer: "100$",
    },
    {title: "قاب5", model: "s21", price: "200$"},
    {title: "قاب6", model: "s21", price: "200$"},
    {title: "قاب7", model: "s21", price: "200$"},
    {title: "قاب8", model: "s21", price: "200$"},
    {title: "قاب9", model: "s21", price: "200$"},
  ];

  return (
    <div className="continer min-h-full h-fit  bg-white   " dir="rtl">
      <Qhab products={products} />
    </div>
  );
};

export default QhabMain;

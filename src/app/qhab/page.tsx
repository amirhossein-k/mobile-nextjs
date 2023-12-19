import FilterButtom from "@/components/filter/FilterButtom";
import Qhab from "@/components/qhab/Qhab";
import Image from "next/image";
import Link from "next/link";
import React, {useState} from "react";
import {getproductt, product} from "../../../types";
import {GetProduct} from "../../../actions/GetProduct";
import {AxiosResponse} from "axios";
import {StyledEngineProvider} from "@mui/material/styles";
const QhabMain = async () => {
  const listproduct = await GetProduct();
  // console.log(listproduct, "page qhab");

  // const products: product[] = [
  //   {title: "قاب1", model: "s21", price: "200$", classs: ""},
  //   {title: "تراول-ماگ-میکسر-درم", model: "a31", price: "200$", classs: ""},
  //   {
  //     title: "شیکر میکسر پاورولوژی با حجم 450 سی سی کیفیت اصلی",
  //     model: "a11",
  //     price: "200$",
  //     classs: "",
  //   },
  //   {
  //     title: "قاب4",
  //     model: "s21",
  //     price: "200$",
  //     classs: "offer",
  //     class2: "offer-text",
  //     price_offer: "100$",
  //   },
  //   {title: "قاب5", model: "s21", price: "200$", classs: ""},
  //   {title: "قاب6", model: "s21", price: "200$", classs: ""},
  //   {title: "قاب7", model: "s21", price: "200$", classs: ""},
  //   {title: "قاب8", model: "s21", price: "200$", classs: ""},
  //   {title: "قاب9", model: "s21", price: "200$", classs: ""},
  // ];

  return (
    <div className="continer min-h-full h-fit  bg-white   " dir="rtl">
      <StyledEngineProvider injectFirst>
        {listproduct !== undefined && <Qhab products={listproduct} />}
      </StyledEngineProvider>
    </div>
  );
};
export default QhabMain;

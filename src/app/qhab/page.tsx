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

  return (
    <div className="continer min-h-full h-fit  bg-white   " dir="rtl">
      {/* <StyledEngineProvider injectFirst> */}
      {listproduct !== undefined && <Qhab products={listproduct} />}
      {/* </StyledEngineProvider> */}
    </div>
  );
};
export default QhabMain;

"use server";

import axios, {AxiosRequestConfig, AxiosResponse} from "axios";
import {product} from "../types";

interface getproduct {
  message: string;
  success: boolean;
  product: product[];
  error?: boolean;
}
export const GetProduct = async () => {
  try {
    const datamodify: getproduct = {
      message: "error",
      product: [],
      success: false,
      error: true,
    };
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    // const data = await axios.get(
    //   "http://localhost:3000/api/product/qhab",
    //   config
    // );
    const options: AxiosRequestConfig = {
      method: "GET",
      url: "http://localhost:3000/api/product/qhab",
      headers: {
        "Content-Type": "application/json",
      },
      responseType: "json",
    };

    // const data = await axios<undefined>(options);
    const data: any = await axios(options);
    // console.log("objectgggggggggg");
    console.log(data, "yu");
    if (data) {
      console.log("data hast");
      var check_error = false;
      const dataa = undefined;
      const checkk = typeof data === "undefined" ? true : check_error;

      if (!checkk) {
        console.log(checkk);
        // console.log(data.data);
        return data;
      } else {
        console.log(datamodify);
        return datamodify;
      }
    }
  } catch (error: any) {
    // return error;
    throw error;
  }
};

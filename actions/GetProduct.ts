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

    console.log("objectgggggggggg");
    const data = await axios<undefined>(options);
    console.log(data, "yu");
    if (data) {
      console.log("data hast");
      return data.data;
    } else {
      console.log("undefinded shode");
      return datamodify;
    }
  } catch (error: any) {
    // return error;
    throw error.response.data.error;
  }
};

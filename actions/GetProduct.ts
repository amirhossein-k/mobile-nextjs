"use server";

import axios, {AxiosRequestConfig} from "axios";
import {product} from "../types";

interface getproduct {
  message: string;
  success: boolean;
  product: product[];
  error?: any;
}
export const GetProduct = async () => {
  try {
    const datamodify: getproduct = {
      message: "error",
      product: [],
      success: false,
    };
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const data = await axios.get(
      "http://localhost:3000/api/product/qhab",
      config
    );
    // const options: AxiosRequestConfig = {
    //   method: "GET",
    //   url: "http://localhost:3000/api/product/qhab/1",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // };
    console.log("objectgggggggggg");
    // const data = await axios(options);
    console.log(data, "yu");

    return data;
  } catch (error: any) {
    // return error;
    throw error.response.data.error;
  }
};

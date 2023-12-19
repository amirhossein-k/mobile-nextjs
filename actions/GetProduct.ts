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
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const data = await axios.get(
      "http://localhost:3000/api/product/qhab/1",
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
    if (data !== undefined) {
      if (data.data !== undefined) {
        return data;
      }
    }
  } catch (error: any) {
    // return error;
    throw error.response.data.error;
  }
};

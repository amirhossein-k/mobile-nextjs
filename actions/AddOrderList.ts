"use server";
import axios, {AxiosRequestConfig} from "axios";

export const AddOrderProduct = async (
  id: string,
  title_product: string,
  color_product: string,
  counter_product: string
) => {
  try {
    const us = {
      productId: id,
      productTitle: title_product,
      productCount: counter_product,
      productColor: color_product,
    };
    console.log(us);
    const options: AxiosRequestConfig = {
      method: "POST",
      url: "http://localhost:3000/api/users/list",
      headers: {
        "Content-Type": "application/json",
      },
      data: us,
    };

    const data = await axios(options);
    console.log(data);
  } catch (error: any) {
    console.log(error);
    console.log(error.response);
  }
};

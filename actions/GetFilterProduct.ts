"use server";

import axios, {AxiosRequestConfig, AxiosResponse} from "axios";
import {product} from "../types";
import prisma from "@/db/prismaDb";

interface getproduct {
  message: string;
  success: boolean;
  product: product[];
  error?: boolean;
}
export const getFilterProduct = async (filter: string) => {
  try {
    const listproduct = await prisma.products.findMany({
      include: {
        category_product: true,
        property: true,
        colors: true,
        model: true,
        productImage: true,
      },
    });
    console.log(listproduct);
    var filter_list;
    if (filter === "offer") {
      filter_list = listproduct.filter((product) => product.classs === "offer");
    }
    console.log(filter_list);
    if (filter_list) return filter_list;
  } catch (error: any) {
    throw new Error(error);
  }
};

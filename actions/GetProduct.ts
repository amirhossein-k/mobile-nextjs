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
export const GetProduct = async () => {
  try {
    const listprodeuct = await prisma.products.findMany({
      include: {
        category_product: true,
      },
    });
    console.log(listprodeuct);

    if (listprodeuct) return listprodeuct;
  } catch (error: any) {
    throw new Error(error);
  }
};

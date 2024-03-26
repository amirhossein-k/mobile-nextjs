import prisma from "@/db/prismaDb";
import Product from "@/models/productModel";
import {NextRequest, NextResponse} from "next/server";
import {product} from "../../../../../types";

export const POST = async (req: NextRequest) => {
  const reqBody = await req.json();

  const {
    title,
    model,
    price,
    classs,
    class2,
    price_offer,
    status,
    count,
    review,
  } = reqBody;

  const product = await prisma.products.create({
    data: {
      title,
      model,
      price,
      classs,
      class2,
      price_offer,
      status,
      count,
      review,
    },
  });
  return NextResponse.json(product);
};
interface getproduct {
  message: string;
  success: boolean;
  product: product[];
}

export const GET = async () => {
  const productList = await prisma.products.findMany({
    include: {
      category_product: true,
      colors: true,
      property: true,
      model: true,
      productImage: true,
      tags: true,
    },
  });
  return NextResponse.json(productList);
};

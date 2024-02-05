import prisma from "@/db/prismaDb";
import Product from "@/models/productModel";
import {NextRequest, NextResponse} from "next/server";
import {product} from "../../../../../types";

export const POST = async (req: NextRequest) => {
  const reqBody = await req.json();

  const {title, ownerId} = reqBody;

  const categoryproduct = await prisma.categoryProduct.create({
    data: {
      title,
      ownerId,
    },
  });
  return NextResponse.json(categoryproduct);
};
interface getproduct {
  message: string;
  success: boolean;
  product: product[];
}

export const GET = async () => {
  const categoryproduct = await prisma.categoryProduct.findMany({});
  return NextResponse.json(categoryproduct);
};

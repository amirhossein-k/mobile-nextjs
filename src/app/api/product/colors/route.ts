import {NextRequest, NextResponse} from "next/server";
import prisma from "@/db/prismaDb";

export const POST = async (req: NextRequest) => {
  const reqBody = await req.json();

  const {model, Colors, ownerId} = reqBody;

  const colorsproduct = await prisma.colorsProduct.create({
    data: {
      model,
      Colors,
      ownerId,
    },
  });
  return NextResponse.json(colorsproduct);
};

export const GET = async () => {
  const colorsproduct = await prisma.colorsProduct.findMany({});
  return NextResponse.json(colorsproduct);
};

import {NextRequest, NextResponse} from "next/server";
import prisma from "@/db/prismaDb";

export const POST = async (req: NextRequest) => {
  const reqBody = await req.json();

  const {title, ownerId} = reqBody;

  const modelproduct = await prisma.modelProduct.create({
    data: {
      title,

      ownerId,
    },
  });
  return NextResponse.json(modelproduct);
};

export const GET = async () => {
  const modelproduct = await prisma.modelProduct.findMany({});
  return NextResponse.json(modelproduct);
};

import {NextRequest, NextResponse} from "next/server";
import prisma from "@/db/prismaDb";

export const POST = async (req: NextRequest) => {
  const reqBody = await req.json();

  const {title, ownerId} = reqBody;

  const propertyproduct = await prisma.propertyProduct.create({
    data: {
      title,

      ownerId,
    },
  });
  return NextResponse.json(propertyproduct);
};

export const GET = async () => {
  const propertyproduct = await prisma.propertyProduct.findMany({});
  return NextResponse.json(propertyproduct);
};

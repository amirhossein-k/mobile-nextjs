import {NextRequest, NextResponse} from "next/server";
import prisma from "@/db/prismaDb";

export const POST = async (req: NextRequest) => {
  const reqBody = await req.json();

  const {ownerId, childImage, defaultImage} = reqBody;

  const imageproduct = await prisma.productImage.create({
    data: {
      ownerId,
      childImage,
      defaultImage,
    },
  });
  return NextResponse.json(imageproduct);
};

export const GET = async () => {
  const imageproduct = await prisma.productImage.findMany({});
  return NextResponse.json(imageproduct);
};

import {NextRequest, NextResponse} from "next/server";
import prisma from "@/db/prismaDb";

export const POST = async (req: NextRequest) => {
  const reqBody = await req.json();

  const {ownerId, title_tag} = reqBody;

  const tagsproduct = await prisma.tags.create({
    data: {
      ownerId,
      title_tag,
    },
  });
  return NextResponse.json(tagsproduct);
};

export const GET = async () => {
  const tagsproduct = await prisma.tags.findMany({});
  return NextResponse.json(tagsproduct);
};

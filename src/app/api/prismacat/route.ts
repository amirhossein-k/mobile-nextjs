import prisma from "@/db/prismaDb";
import getCategoryMain from "../../../../actions/GetCategoryMain";
import {NextResponse} from "next/server";

export async function POST(req: Request) {
  const reqBody = await req.json();

  const {title, pic, parent, linkk} = reqBody;

  const categoryItem = await prisma.categoryItem.create({
    data: {
      pic,
      title,
      parent,
      linkk,
    },
  });
  return NextResponse.json(categoryItem);
}

import prisma from "@/db/prismaDb";
import getCategoryMain from "../../../../actions/GetCategoryMain";
import {NextResponse} from "next/server";

export async function POST(req: Request) {
  //   const currentCat = await getCategoryMain();

  //   if (!currentCat) return null;

  //   const reqBody = await req.json();

  //   const {title, pic} = reqBody;

  const categoryItem = await prisma.category.create({
    data: {
      user: "amir",
    },
  });
  return NextResponse.json(categoryItem);
}

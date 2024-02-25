// import {NextRequest, NextResponse} from "next/server";
// import prisma from "@/db/prismaDb";

// export const POST = async (req: NextRequest) => {
//   const reqBody = await req.json();

//   const {imageUrl, ownerId} = reqBody;

//   const colorsproduct = await prisma.childImageItem.create({
//     data: {
//       imageUrl,
//       ownerId,
//     },
//   });
//   return NextResponse.json(colorsproduct);
// };

// export const GET = async () => {
//   const colorsproduct = await prisma.childImageItem.findMany({});
//   return NextResponse.json(colorsproduct);
// };

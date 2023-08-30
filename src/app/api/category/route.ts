import {ConnectDb} from "@/db/dbConfig";
import Category from "@/models/categoryBoxMainModel";

import {NextResponse, NextRequest} from "next/server";

ConnectDb();

export const POST = async (req: NextRequest) => {
  try {
    const reqBody = await req.json();

    const {category} = reqBody;

    const newCategory = new Category({
      category,
    });

    const savedCategory = await newCategory.save();

    if (savedCategory) {
      return NextResponse.json(
        {message: "ذخیره شد", success: true, savedCategory},
        {status: 201}
      );
    }
  } catch (error: any) {
    return NextResponse.json({error: error.massage}, {status: 500});
  }
};

export const GET = async (req: NextRequest) => {
  console.log("object");
  try {
    const category = await Category.find({});

    console.log(category);
    if (category) {
      return NextResponse.json(
        {message: "گرفته شد", success: true, category},
        {status: 200}
      );
    }
  } catch (error: any) {
    return NextResponse.json({error: error.message}, {status: 500});
  }
};

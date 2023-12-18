import {ConnectDb} from "@/db/dbConfig";
import Product from "@/models/productModel";
import {NextRequest, NextResponse} from "next/server";
import {product} from "../../../../../types";

ConnectDb();

export const POST = async (req: NextRequest) => {
  try {
    const reqBody = await req.json();

    const {title, model, price, classs, class2, price_offer} = reqBody;

    const newProduct = new Product({
      title,
      model,
      price,
      classs: classs || " ",
      class2: class2 ? class2 : " ",
      price_offer: price_offer ? price_offer : " ",
    } as product);

    const savedProduct = await newProduct.save();
    if (savedProduct) {
      return NextResponse.json(
        {
          message: "ذخیره شد",
          success: true,
          savedProduct,
        },
        {status: 201}
      );
    }
  } catch (error: any) {
    return NextResponse.json({error: error.massage}, {status: 500});
  }
};

export const GET = async (req: NextRequest) => {
  try {
    const product = await Product.find();

    if (product) {
      return NextResponse.json(
        {
          message: "بارگذاری شد",
          success: true,
          product,
        },
        {status: 200}
      );
    }
  } catch (error: any) {
    return NextResponse.json({error: error.message}, {status: 500});
  }
};
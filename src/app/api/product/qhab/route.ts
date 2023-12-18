import {ConnectDb} from "@/db/dbConfig";
import Product from "@/models/productModel";
import {NextRequest, NextResponse} from "next/server";
import {product} from "../../../../../types";

ConnectDb();

export const POST = async (req: NextRequest) => {
  try {
    const reqBody = await req.json();

    const {title, model, price, classs, class2, price_offer} = reqBody;

    console.log(title);
    const newProduct = new Product({
      title,
      model,
      price,
      classs,
      class2,
      price_offer,
    } as product);

    console.log(newProduct);
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

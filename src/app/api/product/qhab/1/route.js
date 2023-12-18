import {ConnectDb} from "@/db/dbConfig";
import Product from "@/models/productModel";
import {NextRequest, NextResponse} from "next/server";

ConnectDb();

export const GET = async () => {
  try {
    const product = await Product.find();

    var sdendd = {
      message: "بارگذاری شد",
      success: true,
      product,
    };
    if (product !== undefined) {
      return NextResponse.json(sdendd, {status: 200});
    }
  } catch (error) {
    return NextResponse.json({}, {status: 500});
  }
};

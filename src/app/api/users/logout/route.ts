import {ConnectDb} from "@/db/dbConfig";
import {NextRequest, NextResponse} from "next/server";


export const GET = async () => {
  try {
ConnectDb();

    const response = NextResponse.json(
      {
        message: "با موفقیت از حساب کاربری خارج شدید",
        success: true,
      },
      {status: 200}
    );
    response.cookies.set("tokken", "", {httpOnly: true, expires: new Date(0)});

    return response;
  } catch (error: any) {
    return NextResponse.json({error: error.message}, {status: 500});
  }
};

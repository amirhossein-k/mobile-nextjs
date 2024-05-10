import {ConnectDb} from "@/db/dbConfig";
import User from "@/models/userModel";
import {NextRequest, NextResponse} from "next/server";
import {GetDataFromTokken} from "../../../../../helpers/getDataFromTokken";


export const GET = async (req: NextRequest) => {
  try {
    ConnectDb();
    //

    //
    const userID = await GetDataFromTokken(req);
    const user = await User.findOne({_id: userID}).select("-password");
    return NextResponse.json({
      message: "User Found",
      success: true,
      data: user,
    });
  } catch (err: any) {
    return NextResponse.json({error: err.message}, {status: 400});
  }
};

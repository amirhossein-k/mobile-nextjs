import {ConnectDb} from "@/db/dbConfig";
import User from "@/models/userModel";
import {NextRequest, NextResponse} from "next/server";
import {GetDataFromTokken} from "../../../../../helpers/getDataFromTokken";


export const PUT = async (req: NextRequest) => {
  try {
ConnectDb();

    const reqBody = await req.json();
    const {name, email, address} = reqBody;
    const UserId = await GetDataFromTokken(req);
    console.log(UserId);

    const user = await User.findOne({_id: UserId}).select("-password");

    if (user) {
      console.log(user);

      if (name && email) {
        user.name = name;
        user.email = email;
      } else {
        user.address = address;
      }
      await user.save();
      return NextResponse.json({
        message: "Update Successfull",
        success: true,
      });
    } else {
      return NextResponse.json({error: "درسترسی ندارید"}, {status: 400});
    }
  } catch (error: any) {
    return NextResponse.json({error: error.message}, {status: 400});
  }
};

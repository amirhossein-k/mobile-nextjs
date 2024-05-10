import {ConnectDb} from "@/db/dbConfig";
import User from "@/models/userModel";
import {NextRequest, NextResponse} from "next/server";
import bcryptj from "bcryptjs";
import jwt from "jsonwebtoken";
import {ObjectId} from "mongoose";

interface ReqLogin {
  email: string;
  password: string;
}

interface USER {
  _id: ObjectId;
  name: string;
  email: string;
  password: string;
  isVerfied: boolean;
  isAdmin: boolean;
}


export const POST = async (req: NextRequest) => {
  try {
ConnectDb();

    const reqBody = await req.json();
    const {email, password}: ReqLogin = reqBody;

    // check exist
    const user: USER | null = await User.findOne({email});
    if (!user)
      return NextResponse.json({error: "شما عضو نیستید"}, {status: 404});

    // check password current
    const validPassword = await bcryptj.compare(password, user.password);
    if (!validPassword)
      return NextResponse.json(
        {error: "رمز عبور یا ایمیل شما اشتباه است"},
        {status: 400}
      );

    // create tokken data
    const tokkenData = {
      id: user._id,
      name: user.name,
      email: user.email,
    };
    // create tokken
    const tokken = await jwt.sign(tokkenData, process.env.TOKEN_SECTET!, {
      expiresIn: "1d",
    });

    const response = NextResponse.json(
      {message: "Login Successful", success: true, id: user._id},
      {status: 201}
    );

    response.cookies.set("tokken", tokken, {httpOnly: true});

    return response;
  } catch (error: any) {
    return NextResponse.json(
      {error: `Login failed ${error.message}`},
      {status: 500}
    );
  }
};

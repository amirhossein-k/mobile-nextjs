import {ConnectDb} from "@/db/dbConfig";
import User from "@/models/userModel";
import {NextRequest, NextResponse} from "next/server";
import bcryptjs from "bcryptjs";
ConnectDb();

export const POST = async (req: NextRequest) => {
  try {
    const reqBody = await req.json();
    const {name, email, password} = reqBody;

    // check exist email
    const user = await User.findOne({email});

    if (user)
      return NextResponse.json({error: "ایمیل تکراری است"}, {status: 400});

    // hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();
    console.log(savedUser, "saved user");

    return NextResponse.json(
      {
        message: `خوش امدی ${name}`,
        success: true,
        savedUser,
      },
      {status: 201}
    );
  } catch (error: any) {
    return NextResponse.json({error: error.mrssage}, {status: 500});
  }
};

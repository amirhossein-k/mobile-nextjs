import jwt, {JwtPayload} from "jsonwebtoken";
import {ObjectId} from "mongoose";
import {NextRequest} from "next/server";

interface Tokken {
  id: ObjectId;
  name: string;
  email: string;
}

// export const GetDataFromTokken = async (tokken: any) => {
//   try {
//     // const tokken = req.cookies.get("tokken")?.value || "";
//     console.log("ttttttttt", tokken.body);
//     const decodedTokken: Tokken | JwtPayload = jwt.verify(
//       tokken,
//       process.env.TOKEN_SECTET!
//     ) as Tokken;

//     return decodedTokken.id;
//   } catch (err: any) {
//     console.log("err");
//     throw new Error(err.message);
//   }
// };
export const GetDataFromTokken = async (req: NextRequest) => {
  try {
    const tokken = req.cookies.get("tokken")?.value || "";
    console.log(tokken);

    // console.log("ttttttttt", tokken.body);
    const decodedTokken: Tokken | JwtPayload = jwt.verify(
      tokken,
      process.env.TOKEN_SECTET!
    ) as Tokken;

    return decodedTokken.id;
  } catch (err: any) {
    console.log("err");
    throw new Error(err.message);
  }
};

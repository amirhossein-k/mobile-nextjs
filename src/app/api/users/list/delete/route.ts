import {NextRequest, NextResponse} from "next/server";
import {GetDataFromTokken} from "../../../../../../helpers/getDataFromTokken";
import {LISTORDERNEW1} from "../../../../../../types";
import User from "@/models/userModel";

export const DELETE = async (req: NextRequest) => {
  try {
    console.log("object");
    const reqBody = await req.json();
    const {productId, productModel, productColor} = reqBody;

    console.log(productModel);
    console.log(productId);
    console.log(productColor);
    // get user from tokken cookie
    const userID = await GetDataFromTokken(req);
    console.log("object");
    console.log(userID);
    let user = await User.findOne({_id: userID}).select("-password");
    console.log(user);
    // user.
    if (user) {
      console.log(user);
      let target: LISTORDERNEW1 = user.listordershop.filter(
        (list: LISTORDERNEW1) => {
          return (
            list.id === productId &&
            list.model === productModel &&
            list.color === productColor
          );
        }
      )[0];
      console.log(target);

      const indexTarget = user.listordershop.findIndex(
        (item: any) => item === target
      );
      console.log(indexTarget);

      //   user.listordershop[indexTarget] = rr;
      //   user.listordershop.splice(indexTarget, 1);
      user.listordershop.splice(indexTarget, indexTarget !== -1 ? 1 : 0);
      //   console.log(user.listordershop.splice(indexTarget, 1));
      //   console.log(user.listordershop[indexTarget]);
      console.log(user.listordershop);

      const newUser = await user.save();

      console.log(newUser);

      return NextResponse.json({
        message: "حذف شد",
        success: true,
        data: newUser.listordershop,
      });
    }
  } catch (error: any) {
    return NextResponse.json({error: error.mrssage}, {status: 500});
  }
};

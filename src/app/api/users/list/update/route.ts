import {NextRequest, NextResponse} from "next/server";
import {GetDataFromTokken} from "../../../../../../helpers/getDataFromTokken";
import {LISTORDERNEW1} from "../../../../../../types";
import User from "@/models/userModel";

export const POST = async (req: NextRequest) => {
  try {
    console.log("object");
    const reqBody = await req.json();
    const {productId, productModel, productCount, productColor} = reqBody;

    console.log(productModel);
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
      const rr = {
        id: target.id,
        color: target.color,
        count: String(productCount),
        price: target.price,
        status: target.status,
        model: target.model,
        title: target.title,
        price_offer: target.price_offer,
      };
      user.listordershop[indexTarget] = rr;
      console.log(user.listordershop[indexTarget]);

      const newUser = await user.save();

      console.log(newUser);

      return NextResponse.json({
        message: "اپدیت شد",
        success: true,
        data: newUser.listordershop,
      });
    }
  } catch (error: any) {
    return NextResponse.json({error: error.mrssage}, {status: 500});
  }
};

"use server";
import {ConnectDb} from "@/db/dbConfig";
import User from "@/models/userModel";
import {NextRequest, NextResponse} from "next/server";
import prisma from "@/db/prismaDb";
import {GetDataFromTokken} from "../../../../../helpers/getDataFromTokken";
import {ProductImage, product} from "@/../types/index";
import {ObjectId} from "mongoose";
import {cookies} from "next/headers";
import {LISTORDERNEW1} from "../../../../../types/index";
ConnectDb();

interface ADDRESS {
  location: string;
  state: string;
  zipcode: string;
}
interface NEWORDER {
  counter: string;
  color: string;
}
interface LISTFAVORITE extends product, NEWORDER {}
type LISTORDERNEW = Omit<
  LISTFAVORITE,
  | "property"
  | "colors"
  | "counter"
  | "category_product"
  | "class2"
  | "classs"
  | "review"
  | "createdAt"
  | "updatedAt"
>;

interface USER {
  id: ObjectId;
  name: string;
  email: string;
  password?: string;
  isVerfied: boolean;
  isAdmin: boolean;
  address: ADDRESS[];
  listfavorite: LISTORDERNEW[];
  productImage: ProductImage[];
}
export const POST = async (req: NextRequest) => {
  try {
    const reqBody = await req.json();
    const {productId, productTitle, productCount, productColor} = reqBody;
    console.log(productId);
    console.log(productCount);

    // check detail product in database with this req
    const Product = await prisma.products.findUnique({
      where: {
        id: productId,
      },
      include: {
        category_product: true,
        colors: true,
        property: true,
        model: true,
        productImage: true,
      },
    });
    if (Product) {
      console.log(Product);
      // get user from tokken cookie
      const userID = await GetDataFromTokken(req);
      console.log(userID);
      const user = await User.findOne({_id: userID}).select("-password");

      console.log(user);
      console.log(productCount);
      // my  new listorder
      const ItemListOrder = <LISTORDERNEW>{
        id: Product?.id,
        color: productColor,
        count: productCount,
        price: Product?.price,
        status: Product?.status,
        model: productTitle,
        title: Product.title,
        price_offer: Product?.price_offer,
        productImage: Product.productImage,
        // model:productTitle
      };

      if (
        user.listfavorite.length === 0 ||
        user.listfavorite.every(
          (x: LISTORDERNEW) =>
            x.model === productTitle &&
            x.color !== productColor &&
            x.id === productId
        ) ||
        user.listfavorite.every(
          (x: LISTORDERNEW) =>
            // x.color !== productColor &&
            x.model !== productTitle && x.id === productId
        ) ||
        user.listfavorite.every((x: LISTORDERNEW) => x.id !== productId)
      ) {
        console.log("new");
        // if new
        // save product information in user
        user.listfavorite.push(ItemListOrder);
      } else if (
        !user.listfavorite.find(
          (x: LISTORDERNEW) =>
            x.model === productTitle &&
            x.id === productId &&
            x.color === productColor
        )
      ) {
        // new 2
        console.log("new1");
        user.listfavorite.push(ItemListOrder);
      } else {
        console.log("old");
        // if exist in list
        console.log(user.listfavorite);
        console.log(productCount);
        console.log(productColor);
        console.log(productId);
        console.log(productTitle);
        console.log(
          user.listfavorite.every((x: LISTORDERNEW) => x.id !== productId)
        );
        //
        console.log(
          user.listfavorite.every(
            (x: LISTORDERNEW) =>
              // x.color !== productColor &&

              x.color !== productColor &&
              x.model !== productTitle &&
              x.id === productId
          )
        );
        // rrrrr
        // Product.model.find(
        //   (x: LISTORDERNEW) =>
        //     x.model === productTitle &&
        //     x.id === productId &&
        //     x.color === productColor
        // )
        console.log(
          !user.listfavorite.find(
            (x: LISTORDERNEW) =>
              x.model === productTitle &&
              x.id === productId &&
              x.color === productColor
          )
        );

        //
        console.log(
          user.listfavorite.every(
            (x: LISTORDERNEW) =>
              x.model === productTitle &&
              x.color !== productColor &&
              x.id === productId
          )
        );
        console.log(
          user.listfavorite.every(
            (x: LISTORDERNEW) =>
              // x.color !== productColor &&
              x.id === productId ||
              (x.color !== productColor && x.model !== productTitle)
          )
        );
        console.log(
          user.listfavorite.every(
            (x: LISTORDERNEW) =>
              // x.color !== productColor &&
              x.model !== productTitle && x.id === productId
          )
        );
        // const indextOrder = user.listfavorite.findIndex(
        //   (item: LISTORDERNEW) => {
        //     item.id === productId && item.model === productTitle;
        //   }
        // );
        // console.log(indextOrder);
        // user.listfavorite[indextOrder] = ItemListOrder;
        console.log(productId === user.listfavorite[0].id);

        const indextOrder = user.listfavorite.filter(
          (item: LISTORDERNEW, index: any) => {
            return (
              item.id === productId &&
              item.model === productTitle &&
              item.color === productColor
            );
          }
        )[0];
        console.log(indextOrder);
        const index = user.listfavorite.indexOf(indextOrder);
        console.log(index);
        // console.log(indextOrder);
        console.log(user.listfavorite[index]);
        user.listfavorite[index] = ItemListOrder;
      }

      await user.save();
      return NextResponse.json({
        message: "اضافه شد",
        success: true,
      });
    } else {
      // وقتی که کسی بخواد نفوذ کنه
      return NextResponse.json(
        {error: "اطلاعات هم خوانی ندارد"},
        {status: 500}
      );
    }
  } catch (error: any) {
    return NextResponse.json({error: error.mrssage}, {status: 500});
  }
};

// get
export const GET = async (req: NextRequest) => {
  try {
    console.log("object");
    // const reqBody = await req.json();

    // get user from tokken cookie
    const userID = await GetDataFromTokken(req);
    console.log("object");
    console.log(userID);
    const user = await User.findOne({_id: userID}).select("-password");

    console.log(user);

    return NextResponse.json({
      message: "اطلاعات گرفته شد",
      success: true,
      data: user.listfavorite,
    });
  } catch (error: any) {
    return NextResponse.json({error: error.mrssage}, {status: 500});
  }
};

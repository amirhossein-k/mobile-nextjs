import prisma from "@/db/prismaDb";
import Product from "@/models/productModel";
import { NextRequest, NextResponse } from "next/server";
// import { product } from "../../../../../types";

export const POST = async (req: NextRequest) => {
  const reqBody = await req.json();

  let {
    title,
    model,
    price,
    classs,
    class2,
    price_offer,
    status,
    counts,
    review,
    category_product,
    product_image,
    defaultImage,
    colors,
  } = reqBody;
  console.log(product_image);

  console.log(reqBody);
  console.log(counts);
  if (status === "approved") {
    status = true;
  } else {
    status = false;
  }
  console.log(category_product, "cat");
  // part 1 = main product
  const product = await prisma.products.create({
    data: {
      title,
      //   model,
      price,
      classs: " ",
      class2: " ",
      price_offer: " ",
      count: counts,
      review: "",
      status,
    },
  });
  console.log(product);
  // part 2 = category_product ={title, defaultCat, ownerId = product.id}
  for (let i = 0; i < category_product.length; i++) {
    const categoryproduct = await prisma.categoryProduct.create({
      data: {
        title: category_product[i],
        defaultCat: false,
        ownerId: product.id,
      },
    });
  }
  // part 3 - 4  = colorsproduct = {model, Colors, ownerId= product.id} & model ={title ,ownerId=product.id}
  const reDot = /[-]/;
  console.log(colors);
  console.log(colors.length);
  for (let i = 0; i < colors.length; i++) {
    const length_slice = colors[i].search(reDot);
    console.log(length_slice);
    const modell = colors[i].slice(0, length_slice);
    var colorr;
    if (length_slice === 0) {
      colorr = "سفید";
    } else {
      colorr = colors[i].slice(length_slice + 1);
    }
    console.log(colorr);
    const colorsproduct = await prisma.colorsProduct.create({
      data: {
        model: modell,
        Colors: colorr,

        ownerId: product.id,
      },
    });

    const modelproduct = await prisma.modelProduct.create({
      data: {
        title: modell,

        ownerId: product.id,
      },
    });
  }
  // part 4  = productImage ={id,defultImage,childImage,ownerId:product.id}

  for (let i = 0; i < product_image.length; i++) {
    if (product_image[i].Location === defaultImage) {
      const imageproduct = await prisma.productImage.create({
        data: {
          ownerId: product.id,
          childImage: product_image[i].Location,
          defaultImage: true,
          fileKey: product_image[i].Key,
        },
      });
    } else {
      const imageproduct = await prisma.productImage.create({
        data: {
          ownerId: product.id,
          childImage: product_image[i].Location,
          defaultImage: false,
          fileKey: product_image[i].Key,
        },
      });
    }
  }
  console.log("hi");
  return NextResponse.json(product);
  // return NextResponse.json("hi");
};
// interface getproduct {
//   message: string;
//   success: boolean;
//   product: product[];
// }
// s
export const GET = async () => {
  //   const productList = await prisma.products.findMany({
  //     include: {
  //       category_product: true,
  //       colors: true,
  //       property: true,
  //       model: true,
  //       productImage: true,
  //       tags: true,
  //     },
  //   });
  //   return NextResponse.json(productList);
};

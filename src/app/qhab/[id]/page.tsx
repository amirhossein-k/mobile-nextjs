import Header from "@/components/details/header/Header";
import {GetDetailProduct} from "../../../../actions/GetProduct";
import {product} from "../../../../types/index";
import ColorsPicker from "@/components/details/colors/ColorsPicker";
import Price from "@/components/details/price/Price";
import Description from "@/components/details/description/Description";
import AddCart from "@/components/details/addCart/AddCart";

import HandleModel from "@/components/details/model/HandleModel";

import {Suspense} from "react";
import Toast from "@/components/toast/Toast";
import Describe from "@/components/details/description/Describe";
import Review from "@/components/details/review/Review";
import Link from "next/link";
import {headers} from "next/headers";

type Props = {
  params: {id: string};
  searchParams: {[key: string]: string | string[] | undefined};
};
export default async function ProductDetails(props: Props) {
  const details: product | undefined = await GetDetailProduct(
    props.params.id ?? " "
  );

  console.log(details);
  // console.log(details);
  // console.log(typeof props.params.id);
  // console.log(details?.colors);
  const colorsDefault = [{model: "", Colors: "", id: "", ownerId: ""}];
  const modelDefault = [{title: "", id: "", ownerId: ""}];
  const searchParams = props.searchParams;
  console.log(searchParams);

  const heads = headers();

  const pathname = heads.get("next-url");
  console.log(pathname);

  console.log(pathname?.includes("qhab"));

  return (
    <div className="main p-2 bg-slate-100">
      <div className=" p-2 shadow-card my-1 block">
        {pathname && (
          <div className="flex flex-row-reverse  gap-3  text-md">
            <Link href={"/"} className="hover:text-black text-blue-400">
              خانه
            </Link>
            <div className="">--</div>
            <Link href={"/qhab"} className="hover:text-black text-blue-400">
              قاب ها
            </Link>
            <div className="">--</div>
            <Link href={pathname} className="hover:text-black text-blue-400">
              {details?.title}
            </Link>
          </div>
        )}
      </div>
      <Toast />
      <Suspense fallback={true}>
        {/* header (images - main detail) */}
        <Header details={details} />
        {/* colors */}

        {details?.colors ? (
          <ColorsPicker
            colors={details?.colors ?? colorsDefault}
            model={details?.model ?? modelDefault}
          >
            <HandleModel id={searchParams.id ?? ""} details={details} />
          </ColorsPicker>
        ) : (
          <></>
        )}

        {/* <ColorsPicker
        colors={details?.colors ?? colorsDefault}
        model={details?.model ?? modelDefault}
      /> */}
        {/* price */}
        {/* {details?.price ? <Price price={Number(details.price)} /> : <>0</>} */}
        {/* addCart */}
        <AddCart {...props} />
        {/* description-review */}
        {/* <Description /> */}
        <Description>
          {searchParams.review ? (
            <Review />
          ) : (
            <Describe describe={details?.property ?? [{title: ""}]} />
          )}
        </Description>
      </Suspense>
    </div>
  );
}

export async function generateMetadata({params}: {params: {id: string}}) {
  const details: any = await GetDetailProduct(params.id);

  return {title: details?.title};
}

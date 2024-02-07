import Header from "@/components/details/header/Header";
import {GetDetailProduct} from "../../../../actions/GetProduct";
import {product} from "../../../../types/index";
import ColorsPicker from "@/components/details/colors/ColorsPicker";
import Price from "@/components/details/price/Price";
import Description from "@/components/details/description/Description";
import AddCart from "@/components/details/addCart/AddCart";

export default async function ProductDetails({
  params,
}: {
  params: {title: string | undefined; id: string | undefined};
}) {
  const details: product | undefined = await GetDetailProduct(params.id ?? " ");
  console.log(details);
  console.log(typeof params.id);
  console.log(details?.colors);
  const colorsDefault = [{model: "", Colors: "", id: "", ownerId: ""}];
  const modelDefault = [{title: "", id: "", ownerId: ""}];

  return (
    <div className="main p-2">
      {/* header (images - main detail) */}
      <Header details={details} />
      {/* colors */}
      {details?.colors ? (
        <ColorsPicker
          colors={details?.colors ?? colorsDefault}
          model={details?.model ?? modelDefault}
        />
      ) : (
        <></>
      )}
      {/* <ColorsPicker
        colors={details?.colors ?? colorsDefault}
        model={details?.model ?? modelDefault}
      /> */}
      {/* price */}
      {details?.price ? <Price price={Number(details.price)} /> : <>0</>}
      {/* addCart */}
      <AddCart />
      {/* description-review */}
      <Description />
    </div>
  );
}

export async function generateMetadata({params}: {params: {id: string}}) {
  const details: any = await GetDetailProduct(params.id);

  return {title: details?.title};
}

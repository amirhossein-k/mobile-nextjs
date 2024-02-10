import Header from "@/components/details/header/Header";
import {GetDetailProduct} from "../../../../actions/GetProduct";
import {product} from "../../../../types/index";
import ColorsPicker from "@/components/details/colors/ColorsPicker";
import Price from "@/components/details/price/Price";
import Description from "@/components/details/description/Description";
import AddCart from "@/components/details/addCart/AddCart";
import ParentColorPicker from "@/components/details/colors/ParentColorPicker";
import HandleModel from "@/components/details/model/HandleModel";

type Props = {
  params: {id: string};
  searchParams: {[key: string]: string | string[] | undefined};
};
export default async function ProductDetails(props: Props) {
  const details: product | undefined = await GetDetailProduct(
    props.params.id ?? " "
  );
  // console.log(details);
  // console.log(typeof props.params.id);
  // console.log(details?.colors);
  const colorsDefault = [{model: "", Colors: "", id: "", ownerId: ""}];
  const modelDefault = [{title: "", id: "", ownerId: ""}];
  const searchParams = props.searchParams;
  // console.log(searchParams);
  return (
    <div className="main p-2">
      {/* header (images - main detail) */}
      <Header details={details} />
      {/* colors */}
      {details?.colors ? (
        <ColorsPicker
          colors={details?.colors ?? colorsDefault}
          model={details?.model ?? modelDefault}
        >
          <HandleModel
            id={searchParams.id ?? ""}
            title={searchParams.title}
            color={searchParams.color}
          />
        </ColorsPicker>
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
      <AddCart {...props} />
      {/* description-review */}
      <Description />
    </div>
  );
}

export async function generateMetadata({params}: {params: {id: string}}) {
  const details: any = await GetDetailProduct(params.id);

  return {title: details?.title};
}

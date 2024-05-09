"use server";
import {cookies} from "next/headers";
import AddToBasket from "./AddToBasket";
import Counter from "./Counter";
import {product} from "../../../../types";

type Props = {
  params: {id: string};
  searchParams: {[key: string]: string | string[] | undefined};
};

const AddCart = async ({
  props,
  detail,
}: {
  props: Props;
  detail: product | undefined;
}) => {
  console.log(props.params.id);
  console.log(props?.searchParams?.counter);
  console.log(detail?.price.length);
  return (
    <div className=" flex justify-center items-center gap-3 relative">
      <Counter
        id={props.params.id}
        color_product={props?.searchParams?.color}
      />
      <div className="absolute top-16 flex gap-3 text-lg" dir="rtl">
        <div className="">مجموع خرید انتخاب شده شما:</div>
        <div className="underline ">
          {/* {Number(props?.searchParams?.counter) * Number(detail?.price)
            ? Number(detail?.price).toLocaleString("de-DE")
            : 0} */}
          {detail?.price &&
            (
              Number(props?.searchParams?.counter) * Number(detail?.price)
            ).toLocaleString("de-DE")}
        </div>
        <div className="">تومان</div>
      </div>

      <AddToBasket
        title_product={props?.searchParams?.title}
        counter_product={props?.searchParams?.counter}
        color_product={props?.searchParams?.color}
        id={props.params.id}
      >
        <button type="submit"> افزودن به سبد خرید</button>
        {/* افزودن به سبد خرید */}
      </AddToBasket>
    </div>
  );
};

export default AddCart;

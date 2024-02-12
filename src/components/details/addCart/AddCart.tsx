"use server";
import {cookies} from "next/headers";
import AddToBasket from "./AddToBasket";
import Counter from "./Counter";

type Props = {
  params: {id: string};
  searchParams: {[key: string]: string | string[] | undefined};
};

const AddCart = async (props: Props) => {
  console.log(props.params.id);
  console.log(props?.searchParams?.counter);
  return (
    <div className=" flex justify-center items-center gap-3">
      <Counter
        id={props.params.id}
        color_product={props?.searchParams?.color}
      />

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

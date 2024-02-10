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

  return (
    <div className=" flex justify-center items-center gap-3">
      <Counter id={props.params.id} />

      <AddToBasket>افزودن به سبد خرید</AddToBasket>
    </div>
  );
};

export default AddCart;

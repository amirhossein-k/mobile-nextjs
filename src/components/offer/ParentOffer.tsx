"use server";

import {getFilterProduct} from "../../../actions/GetFilterProduct";
import {Item} from "../../../types";
import Offer from "./Offer";
import {Suspense} from "react";

const ParentOffer = async ({item}: {item: Item}) => {
  const listproduct = await getFilterProduct("offer");
  console.log(listproduct);

  return (
    <>
      <Suspense>
        {listproduct !== undefined && <Offer item={listproduct} />}
      </Suspense>
    </>
  );
};

export default ParentOffer;

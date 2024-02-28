import Qhab from "@/components/qhab/Qhab";

import {GetProduct} from "../../../actions/GetProduct";
import {Suspense} from "react";

const QhabMain = async () => {
  const listproduct = await GetProduct();

  return (
    <div className="continer min-h-full h-fit  bg-white   " dir="rtl">
      {listproduct !== undefined && (
        // <Suspense fallback={<>loading...</>}>
        <Qhab products={listproduct} />
        // {/* </Suspense> */}
      )}
    </div>
  );
};
export default QhabMain;

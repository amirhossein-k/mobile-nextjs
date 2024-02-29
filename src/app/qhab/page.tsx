import Qhab from "@/components/qhab/Qhab";

import {GetProduct} from "../../../actions/GetProduct";
import {Suspense} from "react";
import Toast from "@/components/toast/Toast";

const QhabMain = async () => {
  const listproduct = await GetProduct();

  return (
    <div className="continer min-h-full h-fit  bg-white   " dir="rtl">
      <Toast />
      {listproduct !== undefined && (
        // <Suspense fallback={<>loading...</>}>
        <Qhab products={listproduct} />
        // {/* </Suspense> */}
      )}
    </div>
  );
};
export default QhabMain;

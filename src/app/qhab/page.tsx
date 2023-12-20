import Qhab from "@/components/qhab/Qhab";

import {GetProduct} from "../../../actions/GetProduct";

const QhabMain = async () => {
  const listproduct = await GetProduct();

  return (
    <div className="continer min-h-full h-fit  bg-white   " dir="rtl">
      {listproduct !== undefined && <Qhab products={listproduct} />}
    </div>
  );
};
export default QhabMain;

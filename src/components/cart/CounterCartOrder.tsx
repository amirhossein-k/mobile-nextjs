import {useRouter, useSearchParams, usePathname} from "next/navigation";
import React, {useCallback, useEffect, useRef, useState} from "react";
import {LISTORDERNEW, LISTORDERNEW1} from "../../../types";
import {useDispatch} from "react-redux";
import {AppDispatch, useAppSelector} from "../../../redux/store";
import {SyncOrder} from "../../../redux/features/added_order";

interface ResGetOrderDetail {
  message: string;
  success: boolean;
  data: LISTORDERNEW1[];
}
const CounterCartOrder = ({
  id,
  product,
}: {
  id: string;
  product: LISTORDERNEW1;
}) => {
  const [counter, setCounter] = useState(Number(product.count));
  const paramas = useSearchParams();
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const urltarget = usePathname();

  const counterRef = useRef(counter);
  //   const hasUpdateOrder = useAppSelector(
  //     (state) => state.syncOrder.value.syncorder
  //   );

  useEffect(() => {
    console.log("run");

    if (counter < 0) {
      setCounter(0);
    }
  }, [counter]);

  const getOrderDetail = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const kam = e.currentTarget.className.includes("text-red-500");
    const ziad = e.currentTarget.className.includes("text-blue-500");
    if (kam) {
      console.log("kam");
      setCounter(counter - 1);
      counterRef.current--;
    } else {
      console.log("ziad");
      setCounter(counter + 1);
      counterRef.current++;
    }
    console.log(counter);
    console.log(counterRef.current);
    const requestOptions: any = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        productId: id,
        productModel: product.model,
        productCount: counterRef.current,
        productColor: product.color,
      }),
    };
    const response = await fetch("/api/users/list/update", requestOptions);

    const data: ResGetOrderDetail = await response.json();
    console.log(data);
    if (data) {
      dispatch(SyncOrder(true));
    }
  };

  // useEffect(() => {
  //   if (hasUpdateOrder) {
  //     console.log("updated success");
  //     dispatch(SyncOrder(false));
  //     // get detail order
  //     getOrderDetail();
  //   }

  // }, [hasUpdateOrder]);

  return (
    <>
      <button onClick={(e) => getOrderDetail(e)} className="hover:text-red-500">
        <i className="bi bi-dash-circle-dotted text-[30px]"></i>
      </button>
      <span className=" text-lg p-1">{counter}</span>
      <button
        onClick={(e) => getOrderDetail(e)}
        className="hover:text-blue-500"
      >
        <i className="bi bi-plus-circle-dotted font-semibold text-[30px]"></i>
      </button>
    </>
  );
};

export default CounterCartOrder;

import {toast} from "react-toastify";
import {product} from ".";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../redux/store";
import {SyncFavorite} from "../redux/features/added_favorite";
const dispatch = useDispatch<AppDispatch>();
export const handleFavorite = async (
  e: React.SyntheticEvent,
  product: product
) => {
  e.preventDefault();
  console.log("f");
  try {
    console.log("fe");

    const requestOptions: any = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        productId: product.id,
        productTitle: product.title,
        productCount: product.count,
        productColor: product.colors,
      }),
    };
    const response = fetch("/api/users/favorite", requestOptions);
    // const AddedOrder = response.json();

    const rr = await toast.promise(response, {
      pending: {
        render() {
          console.log("object");
          return "منتظر بمانید";
        },
      },

      success: {
        render({data}: any) {
          console.log(data);
          return "اضافه شد";
        },
      },
      error: {
        render({data}: any) {
          return data.message;
        },
      },
    });
    console.log(rr);
    dispatch(SyncFavorite(true));
    console.log("object");

    // router.replace(urltarget);
  } catch {}
};

"use client";
import { product } from "@/../types/index";
import Image from "next/image";

const ListProduct = ({ product }: { product: product[] }) => {
  console.log(product);
  return (
    <div>
      <ul>
        {product.map((item: product) => {
          return (
            <li
              key={item.id + 1}
              className="flex items-center flex-row border rounded-md gap-2 p-1 my-1"
            >
              <div className="detail bg-green-200 flex flex-row gap-1 items-center flex-1">
                <div className="image relative w-[100px] h-[100px]">
                  <Image
                    src={
                      item.productImage.filter(
                        (ima) => ima.defaultImage === true
                      )[0].childImage
                    }
                    alt=""
                    fill
                  />
                </div>
                <div className="title">{item.title}</div>
                <div className="price">{item.price}</div>
              </div>
              <div
                className={`buttom flex justify-start gap-2 relative items-end border`}
              >
                <div className="delete">حذف</div>
                <div className="edit">ویرایش</div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListProduct;

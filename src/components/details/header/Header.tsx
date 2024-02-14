import {product} from "../../../../types";
import Model from "../model/Model";
import ImagesProduct from "./ImagesProduct";

export default function Header({details}: {details: product | undefined}) {
  const reo = details?.review;
  const reoo = (reo: string) => {
    let count = [];
    for (let i = 0; i < Number(reo); i++) {
      count.push({id: `review-${reo}`});
    }
    return count;
  };
  return (
    <div className="header flex mb-7 sm:flex-row flex-col-reverse ">
      {/* images */}
      <div className="images sm:w-[50%] w-full h-full flex justify-center items-center border border-black md:my-0 my-2">
        <ImagesProduct />
      </div>
      {/* detail */}
      <div
        className="detail sm:w-[50%] w-full bg-slate-100 flex flex-col gap-2"
        dir="rtl"
      >
        <div className=" flex sm:flex-col flex-row w-full  ">
          <div className="flex gap-2  p-1 flex-1 ">
            <span className="text-lg font-semibold">برند:</span>
            <h2 className="text-lg">سامسونگ</h2>
          </div>

          <div className="flex gap-2  p-1 flex-2 ">
            {/* <span className="text-lg font-semibold">وضعیت:</span> */}
            <span className="text-lg">ناموجود</span>
          </div>
        </div>

        <div className="flex gap-2  p-1 text-center ">
          <h1 className="text-2xl">{details?.title}</h1>
        </div>
        <div className="flex gap-2  p-1">
          {reoo(details?.review ?? "0").map((item, inx) => {
            return (
              <i
                className="bi bi-star-fill text-yellow-500"
                key={item.id + inx}
              ></i>
            );
          })}
          {/* <i className="bi bi-star-fill text-yellow-500"></i> */}
        </div>
        {/* ویژگی */}
        <ul className="list-disc list-inside">
          {details?.property.map((item) => {
            return (
              <li className="text-lg" key={item.title}>
                {item.title}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

import {product} from "../../../../types";
import Model from "../model/Model";

export default function Header({details}: {details: product | undefined}) {
  return (
    <div className="header flex mb-7">
      {/* images */}
      <div className="images w-[50%] flex justify-center items-center border border-black">
        images
      </div>
      {/* detail */}
      <div className="detail w-[50%]  flex flex-col gap-2" dir="rtl">
        <div className="flex gap-2  p-1 ">
          <span className="text-lg font-semibold">برند:</span>
          <h2 className="text-lg">سامسونگ</h2>
        </div>
        {/* <div className="flex gap-2  p-1">
          <span className="text-lg font-semibold">مدل:</span>
          <Model model={details?.model} />
          <h2 className="text-lg">{details?.model} </h2>
        </div> */}
        <div className="flex gap-2  p-1">
          <span className="text-lg font-semibold">وضعیت:</span>
          <span className="text-lg">موجود</span>
        </div>
        <div className="flex gap-2  p-1">
          <h1 className="text-2xl">{details?.title}</h1>
        </div>
        <div className="flex gap-2  p-1">* * *</div>
        {/* ویژگی */}
        <ul className="list-disc list-inside">
          {details?.property.map((item) => {
            return <li className="text-lg">{item.title} </li>;
          })}
        </ul>
      </div>
    </div>
  );
}

import {product} from "../../../../types";

export default function Header({details}: {details: product | undefined}) {
  return (
    <div className="header flex ">
      {/* images */}
      <div className="images w-[50%] bg-red-300">images</div>
      {/* detail */}
      <div className="detail w-[50%] bg-blue-300 flex flex-col gap-2" dir="rtl">
        <div className="flex gap-2  p-1 ">
          <span className="text-lg font-semibold">برند:</span>
          <h2 className="text-lg">سامسونگ</h2>
        </div>
        <div className="flex gap-2  p-1">
          <span className="text-lg font-semibold">مدل:</span>
          <h2 className="text-lg">{details?.model} </h2>
        </div>
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
          <li className="text-lg">ویژگی1 </li>
          <li className="text-lg">ویژگی2</li>
          <li className="text-lg">ویژگی3</li>
        </ul>
      </div>
    </div>
  );
}

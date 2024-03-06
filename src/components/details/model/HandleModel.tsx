"use server";
import {cookies} from "next/headers";
import {product} from "../../../../types";

const HandleModel = async ({
  id,
  details,
}: {
  id: string | string[];
  details: product;
}) => {
  // const
  const onDay = 24 * 60 * 60 * 1000;

  // cookies().set("color", color ? color[0] : "", {expires: Date.now() - onDay});
  // console.log(details);
  return (
    <div className="bg-blue-100 border rounded-lg border-white p-2 flex gap-2">
      {/* server */}
      {/* <h1>{title}</h1>
      <h2>{color}</h2> */}
      {/* <h3>id:{id}</h3> */}
      <h2 className="flex gap-3 text-lg">
        <div className="">قیمت محصول:</div>
        {details && Number(details.price).toLocaleString("de-DE")}
      </h2>
      <h3 className="text-lg">تومان</h3>
    </div>
  );
};

export default HandleModel;

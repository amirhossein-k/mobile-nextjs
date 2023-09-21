import Image from "next/image";

import React, {Suspense} from "react";

interface Itemitem {
  pic?: string;
  title: string;
}
interface Item {
  layout: string;
  type?: string;
  title?: string;
  item?: Itemitem[];
}
const Banner = ({item}: {item: Item}) => {
  return (
    <div className="grid  w-full grid-cols-2 cursor-pointer  md:auto-rows-[220px]  auto-rows-[150px]  md:grid-cols-2 lg:grid-cols-4 gap-2">
      {item.item?.map((pics, index) => {
        return (
          <div
            className="bg-blue-300 group  shadow shadow-sky-300 rounded w-full flex justify-center items-center relative h-full overflow-hidden "
            key={index + pics.title}
          >
            <Image
              src={pics.pic ?? ""}
              // width={500}
              // height={500}
              fill
              quality={100}
              alt=""
              className="group-hover:scale-105 "
            />
            <span className="absolute text-xl text-[#49799c] font-semibold">
              {pics.title}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Banner;

import Image from "next/image";
import React from "react";

const GIfHome = () => {
  return (
    <div className="grid  w-full grid-cols-1 cursor-default lg:grid-rows-1  place-items-center  auto-rows-fr  md:grid-cols-2 lg:grid-cols-2 gap-2">
      <div className="relative rounded overflow-hidden  ">
        <Image
          // className="w-full h-full"
          alt=""
          src={
            "https://uploade.storage.iran.liara.space/gif1-compress-min%20%282%29.gif"
          }
          //   fill
          width={600}
          height={600}
          quality={100}
        />
      </div>
      <div className="relative rounded overflow-hidden">
        <Image
          //   className="w-full h-full"
          alt=""
          src={"https://uploade.storage.iran.liara.space/gif2.gif"}
          width={600}
          height={600}
          quality={100}
          //   fill
        />
      </div>
    </div>
  );
};

export default GIfHome;

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Favorite = ({setOpen}: any) => {
  //   const handleClose = (e) => {};
  return (
    <div className=" left-0 top-0 text-red-400 h-full fixed bg-[#80aacce9] p-3 z-40">
      <div className="" onClick={() => setOpen(false)} dir="rtl">
        <i className="bi bi-x-circle-fill text-2xl"></i>
      </div>
      {/* product item */}
      <div className="w-[250px] h-[250px] p-2 rounded-lg relative overflow-hidden flex justify-center flex-col items-center  shadow-shadow-catmain bg-[#2682c4]   hover:bg-purple-300 text-white hover:text-black group ">
        {/* <div className="absolute top-0 right-0 z-50 w-full h-full bg-[#97bad4df]"> */}
        <div className="group-hover:flex flex-col hover:justify-between hidden absolute  top-0 right-0 z-50 w-full h-full  bg-[#adc6d0c6]">
          <span
            className="flex  p-1 justify-end mx-2 cursor-pointer "
            dir="ltr"
            // onClick={handleFavorite}
          >
            <i className="bi bi-heart text-2xl w-full text-white   hover:text-red-400"></i>
          </span>
          <div className="  top-[50%] flex flex-col justify-center items-center mx-auto my-auto gap-2 text-lg font-medium">
            <Link
              href={`/qhab/`}
              //   onClick={handleToast}
              className="p-2 w-full items-center justify-center flex rounded-md bg-sky-400 text-white"
            >
              اطلاعات محصول
            </Link>
            <span className="p-2 flex rounded-md bg-[#cba6f2d0] text-white cursor-pointer">
              اضافه کردن به سبد
            </span>
          </div>
          {/* </div> */}
        </div>
        <div className="w-full h-[75%] bg-fuchsia-300 relative">
          <div className="absolute z-30 bg-black rounded px-2 py-1 right-2 top-3 group-hover:text-purple-300">
            -5%
          </div>
          <Image
            src={"https://uploade.storage.iran.liara.space/my.png"}
            alt=""
            fill
          />
        </div>
        <div className="w-full h-[25%] flex  flex-col  p-2">
          <div className="title flex-1 text-lg">title</div>
          <div className="price flex-1 text-lg" dir="ltr">
            155 تومان
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorite;

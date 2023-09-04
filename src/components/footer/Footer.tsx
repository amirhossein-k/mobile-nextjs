const Footer = async () => {
  return (
    <div className=" bg-black text-white  relative" dir="rtl">
      <div className=" lg:w-[75%]  flex md:flex-row flex-col w-full h-full lg:m-auto m-0  shadow-shadow-white bg-gray-900 ">
        {/* adress */}
        {/* <div className="absolute hidden lg:block right-0 w-[13%] h-full bg-gray-800 z-10"></div>
        <div className="absolute hidden lg:block left-0 w-[13%] h-full bg-gray-800 z-10"></div> */}
        <div className="md:w-full  bg-red-200 h-full  py-4 bg-transparent md:flex-1 flex-none">
          <ul className="w-full h-full">
            <li className="  p-4 text-xl shadow-lg ">
              تهران،میدان ولیعصر،ابتدای کریمخان، پلاک 304، طبقه اول
            </li>
            <li className=" p-4 text-xl flex-1">تلفن: 02191071701</li>
          </ul>
        </div>
        {/* menu  */}
        <div className="grid grid-cols-2 w-full h-full auto-rows-[250px] md:w-1/2">
          <div className="grid ">
            <div className="flex-1 p-2 border-b  flex items-center justify-center">
              دسترسی سریع
            </div>
            <div className=" flex-1 flex items-center justify-center p-2 hover:bg-purple-300 cursor-pointer">
              item2
            </div>
            <div className=" flex-1 flex items-center justify-center p-2 hover:bg-purple-300">
              item2
            </div>
          </div>
          {/*  */}
          <div className="grid">
            <div className="flex-1 flex items-center justify-center p-2 border-b ">
              خدمات مشتریان
            </div>
            <div className="flex-1 flex items-center justify-center p-2 hover:bg-purple-300">
              item2
            </div>
            <div className="flex-1 flex items-center justify-center p-2 hover:bg-purple-300">
              item2
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

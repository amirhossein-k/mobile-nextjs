// "use server";

import AddProduct from "@/components/newproductAdd/AddProduct";

const page = () => {
  return (
    <div dir="rtl">
      <div className="title text-center ">اضافه کردن محصول</div>
      {/* <AddProduct>
        <div className="">fff</div>
      </AddProduct> */}
      <AddProduct />
    </div>
    // <AddProduct/>
  );
};

export default page;

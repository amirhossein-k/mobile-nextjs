"use client";

import {toast} from "react-toastify";

const AddToBasket = ({children}: {children: React.ReactNode}) => {
  return (
    <div
      className="mx-2 bg-red-400 px-3 py-2 rounded-md text-lg"
      onClick={() => {}}
    >
      {children}
    </div>
  );
};

export default AddToBasket;

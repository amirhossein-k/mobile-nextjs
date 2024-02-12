"use client";
import React from "react";
import {ToastContainer} from "react-toastify";

const Load = () => {
  return (
    <div>
      <ToastContainer
        autoClose={2000}
        pauseOnHover={false}
        closeButton={true}
      />
    </div>
  );
};

export default Load;

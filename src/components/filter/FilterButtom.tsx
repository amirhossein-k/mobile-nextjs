"use client";
import React, {useState} from "react";

const FilterButtom = ({
  setFilter,
  filter,
}: {
  setFilter: any;
  filter: boolean;
}) => {
  return (
    <div
      className={`filter-mobile   p-2 border-2 shadow-slate-500 shadow-shadow-one hover:scale-105 hover:shadow-shadow-white hover:shadow-slate-300 cursor-pointer ${
        filter ? "shadow-shadow-white" : ""
      }`}
      onClick={(e) => setFilter(!filter)}
    >
      <i className="bi bi-sliders text-xl "></i>
      <span className={`p-3 text-lg ${filter ? "text-red-500" : ""}`}>
        فیلتر
      </span>
    </div>
  );
};

export default FilterButtom;

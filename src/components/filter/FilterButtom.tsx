"use client";
import React, {useState} from "react";

const FilterButtom = ({
  setFilterActive,
  filterActive,
}: {
  setFilterActive: any;
  filterActive: boolean;
}) => {
  return (
    <div
      className={`filter-mobile   p-2 border-2 shadow-slate-500 shadow-shadow-one hover:scale-105 hover:shadow-shadow-white hover:shadow-slate-300 cursor-pointer ${
        filterActive ? "shadow-shadow-white" : ""
      }`}
      onClick={(e) => setFilterActive(!filterActive)}
    >
      <i className="bi bi-sliders text-xl "></i>
      <span className={`p-3 text-lg ${filterActive ? "text-red-500" : ""}`}>
        فیلتر
      </span>
    </div>
  );
};

export default FilterButtom;

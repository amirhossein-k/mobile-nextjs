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
      className={`filter-mobile   py-4 px-2  hover:scale-105  cursor-pointer ${
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

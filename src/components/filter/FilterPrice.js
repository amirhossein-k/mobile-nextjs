"use client";
import React, {useState} from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

import {useContext} from "react";
import {memo} from "react";
const marks = [
  {
    value: 0,
    label: "0°C",
  },

  {
    value: 200000,
    label: "200000 تومان",
  },
];

function valuetext(value) {
  return `${value}jjj`;
}
function valueLabelFormat(value) {
  return marks.findIndex((mark) => mark.value === value) + 1;
}

const minDistance = 500;
const FilterPrice = ({value1, setValue1}) => {
  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

  return (
    <Box
      sx={{
        padding: "20px 40px",
        width: "100%",
        position: "relative",
        top: "10px",
        left: "0",
        // backgroundColor: "red",
      }}
    >
      <Slider
        getAriaLabel={() => "Minimum distance"}
        value={value1}
        onChange={handleChange1}
        valueLabelDisplay="on"
        getAriaValueText={valuetext}
        disableSwap
        marks={marks}
        step={1000}
        min={0}
        max={200000}
      />
    </Box>
  );
};

export default memo(FilterPrice);

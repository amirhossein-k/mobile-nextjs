"use client";
import React, {useEffect} from "react";
import Select from "@mui/material/Select";
import {ModelProduct} from "../../../../types";
import {FormHelperText, InputLabel, MenuItem} from "@mui/material";
//
const Model = ({model, setStatus, Status}) => {
  const status = model[0].title;

  useEffect(() => {}, [Status, setStatus]);
  const handleClose = (e) => {
    setStatus(e.currentTarget.innerText);
  };

  return (
    <div>
      {model.length !== 0 && (
        <Select
          className="w-full"
          labelId="demo-select-small"
          id="demo-select-small"
          // value={status}
          defaultValue={status}
          label="وضعیت"
          // onChange={(e) => setStatus(e.target.value)}
        >
          {model.map((item) => {
            return (
              <MenuItem
                key={item.id}
                //   selected={item.title === status}
                value={item.title}
                onClick={(e) => handleClose(e)}
              >
                {item.title}
              </MenuItem>
            );
          })}
        </Select>
      )}
      <FormHelperText className="text-lg">
        مدل خود را انتخاب کنید
      </FormHelperText>
    </div>
  );
};

export default Model;

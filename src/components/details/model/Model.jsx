"use client";
import React, {useCallback, useEffect} from "react";
import Select from "@mui/material/Select";
import {ModelProduct} from "../../../../types";
import {FormHelperText, InputLabel, MenuItem} from "@mui/material";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
//
const Model = ({model, setStatus, Status}) => {
  const status = model[0].title;
  const paramas = useSearchParams();
  const urltarget = usePathname();
  const router = useRouter();
  console.log(urltarget);
  // paramas.delete()
  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(paramas);

      const rr = name.split("-");

      for (let i = 0; i < rr.length; i++) {
        const target = value[rr[i]];

        params.set(rr[i], target);
      }
      return params.toString();
    },
    [paramas]
  );
  useEffect(() => {}, [Status, setStatus]);
  const handleClose = (e) => {
    setStatus(e.currentTarget.innerText);
    paramas.get("title");
  };
  const handleparamsModel = (e) => {
    console.log(paramas.get("title"));
    console.log(paramas.get("color"));
    console.log(paramas.get("counter"));
    console.log(paramas.get("review"));
    console.log(paramas.get("id"));
    const tit = `${paramas.get("title")}-${paramas.get(
      "counter"
    )}-${paramas.get("review")}-${paramas.get("id")}`;
    console.log(tit);
    console.log(tit.search("null"));

    if (tit.search("null") !== -1) {
      const data = {
        id: paramas.get("id"),
        title: e.target.value,
        counter: paramas.get("counter"),
        color: "",
      };
      console.log(e.target.value);
      router.replace(
        `${urltarget}?${createQueryString("id-title-counter-color", data)}`
      );
      console.log("object");
    } else {
      const data = {
        id: paramas.get("id"),
        title: e.target.value,
        counter: paramas.get("counter"),
        review: paramas.get("review"),
      };
      router.push(
        `${urltarget}?${createQueryString("id-title-counter-review", data)}`
      );
    }
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
          onChange={(e) => handleparamsModel(e)}
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

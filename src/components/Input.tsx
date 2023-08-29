import React from "react";

const Input = ({
  key,
  classnamee,
  name,
  type,
  defaultvalue,
  placeholder,
}: {
  key: any;
  classnamee: string;
  name: any;
  type: string;
  defaultvalue: string;
  placeholder: string;
}) => {
  return (
    <input
      key={key}
      className={classnamee}
      type={type}
      name={name}
      defaultValue={defaultvalue}
      placeholder={`${placeholder}...`}
    />
  );
};

export default Input;

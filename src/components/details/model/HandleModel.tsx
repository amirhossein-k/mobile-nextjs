"use server";
import {cookies} from "next/headers";

const HandleModel = async ({
  id,
  title,
  color,
}: {
  [key: string]: string | string[] | undefined;
}) => {
  // const
  const onDay = 24 * 60 * 60 * 1000;

  // cookies().set("color", color ? color[0] : "", {expires: Date.now() - onDay});

  return (
    <div>
      {" "}
      server
      <h1>{title}</h1>
      <h2>{color}</h2>
      <h3>id:{id}</h3>
    </div>
  );
};

export default HandleModel;

"use server";

import {PropertyProduct, product} from "../../../../types";

const Describe = async ({describe}: {describe: PropertyProduct[]}) => {
  describe.map((item) => {
    console.log(item);
  });
  return (
    <div>
      {describe.map((item) => {
        return <div className="">{item.title}</div>;
      })}
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni fugit
      omnis suscipit modi qui deleniti doloremque porro inventore cupiditate, ea
      nobis numquam nihil ad reiciendis, ipsa, laudantium labore impedit
      commodi.
    </div>
  );
};

export default Describe;

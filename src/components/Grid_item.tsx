import {cn} from "../../utils/cn";

import {cva, type VariantProps} from "class-variance-authority";

const variants = cva(
  " rounded-3xl    dark:bg-neutral-900 flex flex-col justify-center   h-max ",
  {
    variants: {
      size: {
        "1x1": "  absolute hidden bg-red-500 ",
        "3x1": "col-span-3 row-span-1 p-8 ",
        "3x2": "col-span-3 row-span-2 p-8 ",
        "4x2":
          "col-span-4  row-span-2 p-8 dark:hover:bg-[#252a32]  dark:hover:shadow-[inset rgba(50, 50, 93, 0.55) 0px 2px 14px 0px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px]",
        "2x1":
          "col-span-2  row-span-2 row-span-max  bg-red-500 m-2 hover:bg-white  col-end-9  md:col-end-10",
        "2x2": "col-span-1  row-span-2 px-2 py-1 w-full",
        "2x4": "col-span-2  row-span-4 relative overflow-hidden ",
        "5x1":
          "col-span-8  row-span-1 w-full h-full md:col-span-6 px-3 lg:col-span-5 ",
        "5x5":
          "col-span-8  row-span-auto w-full  md:col-span-6  lg:col-span-5 ",
        "8x5":
          "col-span-8  row-span-auto w-full  md:col-span-8  lg:col-span-8 ",
      },
    },
    defaultVariants: {
      size: "1x1",
    },
  }
);

type GridItemProps = {children: React.ReactNode} & VariantProps<
  typeof variants
>;

const GridItem = ({size, children}: GridItemProps) => {
  return <div className={cn(variants({size, className: ""}))}>{children}</div>;
};

export default GridItem;
